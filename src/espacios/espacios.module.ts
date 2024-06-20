import { Module } from '@nestjs/common';
import { EspaciosService } from './espacios.service';
import { EspaciosController } from './espacios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Espacio } from './entities/espacio.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Espacio])
  ],
  controllers: [EspaciosController],
  providers: [EspaciosService],
})
export class EspaciosModule {}
