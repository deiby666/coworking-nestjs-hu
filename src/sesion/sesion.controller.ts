import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { Sesion } from './entities/sesion.entity';
import { sesionDto } from './dto/sesionDto';

@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @HttpCode(HttpStatus.OK)
  @Get('busiest')
  async sesionBusiest(): Promise<sesionDto[]> {
    return this.sesionService.sesionBusiest();
  }

  @HttpCode(HttpStatus.OK)
  @Get('mostAvailable')
  async mostAvailable(): Promise<sesionDto[]> {
    return this.sesionService.mostAvailable();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async obtenerEspacioAsignado(@Param('id') id: string) {
    return this.sesionService.sesionAsignada(+id);  
  }

  
}
