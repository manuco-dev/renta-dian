import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { ParseMongoIdPipePipe } from 'src/common/pipes/parse-mongo-id-pipe/parse-mongo-id-pipe.pipe';

@Controller('cliente')
export class ClienteController {

  constructor(private readonly clienteService: ClienteService) {}

  @HttpCode(200)
  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto)
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(id);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(term, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipePipe) id: string) {
    return this.clienteService.remove( id);
  }
}
