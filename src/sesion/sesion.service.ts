import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sesion } from './entities/sesion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(Sesion)
    private readonly sesionRepository: Repository<Sesion>,
  ) {}

  async sesionBusiest(): Promise<Sesion[]> {
    const sesiones = await this.sesionRepository
  .createQueryBuilder('s')
  .leftJoin('s.reservas', 'r', 'r.status = :status', { status: 'confirmed' })
  .select([
    's.id_sesion',
    's.nombre',
    's.hora_inicio',
    's.hora_final',
    'COUNT(r.id_reserva) AS total_persons',
    'ARRAY_AGG(ROW(r.id_reserva, r.status)) AS reservas' 
  ])
  .groupBy('s.id_sesion, s.nombre, s.hora_inicio, s.hora_final') 
  .orderBy('total_persons', 'DESC') 
  .getRawMany();

return sesiones;
  }

  async mostAvailable(): Promise<Sesion[]> {
    const sesiones = await this.sesionRepository
      .createQueryBuilder('s')
      .leftJoin('s.reservas', 'r', 'r.status = :status', { status: 'cancelled' }) 
      .select([
        's.id_sesion',
        's.nombre',
        's.hora_inicio',
        's.hora_final',
        'COUNT(r.id_reserva) AS total_cancellations', 
        'ARRAY_AGG(ROW(r.id_reserva, r.status)) AS reservas' 
      ])
      .groupBy('s.id_sesion, s.nombre, s.hora_inicio, s.hora_final') 
      .orderBy('total_cancellations', 'DESC') 
      .getRawMany();
  
    return sesiones;
  }

  async sesionAsignada(sesionId: number): Promise<Sesion | undefined> {
    const usuario = await this.sesionRepository.findOne({ 
        relations: ['reservas.espacio'], 
        where: {
            id_sesion: sesionId
        }
    });

    if (!usuario) {
      throw new NotFoundException(`sesion con id ${sesionId} no encontrada`);
    }

    return usuario
}
  

}
