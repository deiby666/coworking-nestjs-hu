import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { Sesion } from './entities/sesion.entity';

@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Get('busiest')
  async sesionBusiest(): Promise<Sesion[]> {
    return this.sesionService.sesionBusiest();
  }

  @Get('mostAvailable')
  async mostAvailable(): Promise<Sesion[]> {
    return this.sesionService.mostAvailable();
  }

  @Get(':id')
  async obtenerEspacioAsignado(@Param('id') id: string) {
    return this.sesionService.sesionAsignada(+id);
  }

  
}
