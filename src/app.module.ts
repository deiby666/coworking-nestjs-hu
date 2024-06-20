import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SalasModule } from './salas/salas.module';
import { EspaciosModule } from './espacios/espacios.module';
import { ReservasModule } from './reservas/reservas.module';
import { SesionModule } from './sesion/sesion.module';
import { Sala } from './salas/entities/sala.entity';
import { Espacio } from './espacios/entities/espacio.entity';
import { Sesion } from './sesion/entities/sesion.entity';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Reserva } from './reservas/entities/reserva.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [__dirname + '/../**/*.entity{.ts,.js}', Sala, Espacio, Sesion, Usuario, Reserva],
    }),
    UsuariosModule,
    SalasModule,
    EspaciosModule,
    ReservasModule,
    SesionModule
  ],

})
export class AppModule {}
