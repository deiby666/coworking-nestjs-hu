import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { Reserva } from 'src/reservas/entities/reserva.entity';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,

        @InjectRepository(Reserva)
        private reservaRepository: Repository<Reserva>,
    ){}

    async espacioAsignado(usuarioId: number): Promise<Usuario | undefined> {
        const usuario = await this.usuarioRepository.findOne({ 
            relations: ['reservas.espacio'], 
            where: {
                id_usuario: usuarioId
            }
        });
        return usuario
    }
}
