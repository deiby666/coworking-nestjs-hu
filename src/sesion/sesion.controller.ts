import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { Sesion } from './entities/sesion.entity';
import { sesionDto } from './dto/sesionDto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('sesion')
@Controller('sesion')
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'muestra las sesiones mas ocupadas en orden de mayor a menor' })
  @Get('busiest')
  async sesionBusiest(): Promise<sesionDto[]> {
    return this.sesionService.sesionBusiest();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'muestra las sesiones mas disponibles en orden de mayor a menor' })
  @Get('mostAvailable')
  async mostAvailable(): Promise<sesionDto[]> {
    return this.sesionService.mostAvailable();
  }

  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Muestra los espacios de trabajo asignados a una sesion' })
  @Get(':id')
  async obtenerEspacioAsignado(@Param('id') id: string) {
    return this.sesionService.sesionAsignada(+id);  
  }

  
}
