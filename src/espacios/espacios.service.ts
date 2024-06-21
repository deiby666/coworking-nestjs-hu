import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEspacioDto } from './dto/create-espacio.dto';
import { UpdateEspacioDto } from './dto/update-espacio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Espacio } from './entities/espacio.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EspaciosService {

  constructor(
    @InjectRepository(Espacio)
    private readonly espacioRepository: Repository<Espacio>
  ){}

  async obtenerEspaciosDisponibles(idSesion: number): Promise<Espacio[]> {
    const espacios = await this.espacioRepository
      .createQueryBuilder('e')
      .innerJoin('e.reservas', 'r')
      .innerJoin('r.sesion', 's', 's.id_sesion = :idSesion')
      .leftJoinAndSelect('e.sala', 'sl')
      .select(['e.id_espacio', 'e.fila', 'e.columna', 'sl.id_sala', 'sl.nombre'])
      .where('(r.id_reserva IS NULL OR r.status = :status)', { status: 'cancelled' })
      .andWhere('s.id_sesion = :idSesion', { idSesion })
      .getMany();

      if (espacios.length === 0) {
        throw new NotFoundException(`no se encontraron espacios disponibles con el id de sesion ${idSesion}`);
      }

    return espacios;
  }

  async obtenerEspaciosOcupados(idSesion: number): Promise<Espacio[]> {
    
    const espacios = await this.espacioRepository
      .createQueryBuilder('e')
      .leftJoin('e.reservas', 'r')
      .leftJoin('r.sesion', 's')
      .leftJoinAndSelect('e.sala', 'sl')
      .where('r.id_sesion = :idSesion', { idSesion })
      .andWhere('r.status = :status', { status: 'confirmed' })
      .select(['e.id_espacio', 'e.fila', 'e.columna','sl.id_sala', 'sl.nombre'])
      .getMany();

      if (espacios.length === 0) {
        throw new NotFoundException(`no se encontraron espacios disponibles con el id de sesion ${idSesion}`);
      }
      
    return espacios;
  }


}
