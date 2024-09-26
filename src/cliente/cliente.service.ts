import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Model, isValidObjectId } from 'mongoose';
import { Cliente } from './entities/cliente.entity';
import { InjectModel } from '@nestjs/mongoose';
import { toLowerCaseStrings } from 'src/helpers/string-helper';
import { ConfigService } from '@nestjs/config';



@Injectable()
export class ClienteService {

  constructor(
    @InjectModel(Cliente.name)
    private readonly clienteModel: Model<Cliente>,

    private readonly configServer: ConfigService
  ){}

  async create(createClienteDto: CreateClienteDto) {
    toLowerCaseStrings(createClienteDto)
    try {
      const cliente = await  this.clienteModel.create(createClienteDto);
      return cliente;
    } catch (error) {
      this.handleExceptions(error)
  }
}

  async findAll() {

    try {
      const cliente = await this.clienteModel.find()  
      
      if(cliente.length === 0){
        return new NotFoundException('No se encontraron clientes')
      }

      return cliente;

    } catch (error) {
      throw new InternalServerErrorException('Error interno del Servidor, contacta con el administrador')

    }
    
  }

  async findOne(term: string) {
    
    let cliente: Cliente;

    if ( !isNaN(+term) ) {
      cliente = await this.clienteModel.findOne({ no: term });
    }

    // MongoID
    if ( !cliente && isValidObjectId( term ) ) {
      cliente = await this.clienteModel.findById( term );
    }

    // Name
    if ( !cliente ) {
      cliente = await this.clienteModel.findOne({ name: term.toLowerCase().trim() })
    }

    if ( !cliente ) 
      throw new NotFoundException(`Pokemon with id, name or no "${ term }" not found`);
    
    return cliente;
  }

  async update(term: string, updateClienteDto: UpdateClienteDto) {
    toLowerCaseStrings(updateClienteDto)

    try {
      const cliente = await this.findOne(term)
      await cliente.updateOne(updateClienteDto);
      return {...cliente.toJSON(), ...updateClienteDto}
      
    } catch (error) {
      this.handleExceptions(error)
    }
    

  }

  async remove(id: string) {
    
    const result = await this.clienteModel.findByIdAndDelete(id)
    if(!result){
      throw new BadRequestException(`No hay nada para eliminar ${id}`)
    }

    return result;

  }
  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Cliente en la BD ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Error Interno en el Server, comunicate con el Admin`);
  }
}
