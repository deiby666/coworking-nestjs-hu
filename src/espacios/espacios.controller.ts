import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspaciosService } from './espacios.service';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { Espacio } from './entities/espacio.entity';

@Controller('espacios')
export class EspaciosController {
  constructor(private readonly espaciosService: EspaciosService) {}

  @Get('available/sesion/:idSesion')
  async obtenerEspaciosDisponibles(@Param('idSesion') idSesion: number): Promise<Espacio[]> {
    return this.espaciosService.obtenerEspaciosDisponibles(idSesion);
  }

  @Get('ocuppied/sesion/:idSesion')
  async obtenerEspaciosOcupados(@Param('idSesion') idSesion: number): Promise<Espacio[]> {
    return this.espaciosService.obtenerEspaciosOcupados(idSesion);
  }
}
