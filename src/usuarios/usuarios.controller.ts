import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @HttpCode(HttpStatus.OK)
  @Get('usuario/:id')
  async obtenerEspacioAsignado(@Param('id') id: string) {

    return this.usuariosService.espacioAsignado(+id);

  }
 
}
