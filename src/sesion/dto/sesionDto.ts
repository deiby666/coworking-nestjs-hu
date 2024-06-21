import { IsInt, IsNotEmpty, IsObject, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Reserva } from 'src/reservas/entities/reserva.entity';


export class sesionDto {
    @IsInt()
    @IsNotEmpty()
    id_sesion: number;

    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    hora_inicio: string;

    @IsString()
    @IsNotEmpty()
    hora_final: string;
 
    @IsObject()
    @ValidateNested()
    @Type(() => Reserva)
    reservas: Reserva[];
}