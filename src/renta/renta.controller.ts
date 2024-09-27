import { Controller, Get,  Param, ParseIntPipe } from '@nestjs/common';
import { RentaService } from './renta.service';


@Controller('renta')
export class RentaController {
  constructor(private readonly rentaService: RentaService) {}

  @Get(':id')
  calcula(@Param('id', ParseIntPipe) id: number) {
    const idString = id.toString(); // Convertir el número a string
    return this.rentaService.calcularDiaDeclaracion(idString);
  }
}

  

