import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { EspaciosService } from './espacios.service';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { Espacio } from './entities/espacio.entity';
import { EspacioDTO } from './dto/espacioDto';
import { log } from 'console';

@Controller('espacios')
export class EspaciosController {
  constructor(private readonly espaciosService: EspaciosService) {}

  @HttpCode(HttpStatus.OK)
  @Get('available/sesion/:idSesion')
  async obtenerEspaciosDisponibles(@Param('idSesion') idSesion: number): Promise<EspacioDTO[]> {
    
    return this.espaciosService.obtenerEspaciosDisponibles(idSesion);

  }

  @HttpCode(HttpStatus.OK)
  @Get('ocuppied/sesion/:idSesion')
  async obtenerEspaciosOcupados(@Param('idSesion') idSesion: number): Promise<EspacioDTO[]> {
    
    return this.espaciosService.obtenerEspaciosOcupados(idSesion);

  }
}
