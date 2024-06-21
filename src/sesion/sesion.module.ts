import { Module } from '@nestjs/common';
import { SesionService } from './sesion.service';
import { SesionController } from './sesion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sesion } from './entities/sesion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sesion])
  ],
  controllers: [SesionController],
  providers: [SesionService],
})
export class SesionModule {}
