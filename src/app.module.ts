import { Module, Sse } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SalasModule } from './salas/salas.module';
import { EspaciosModule } from './espacios/espacios.module';
import { ReservasModule } from './reservas/reservas.module';
import { SesionModule } from './sesion/sesion.module';


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
      extra: {
        ssl: true
      },
    }),
    UsuariosModule,
    SalasModule,
    EspaciosModule,
    ReservasModule,
    SesionModule
  ],

})
export class AppModule {}
