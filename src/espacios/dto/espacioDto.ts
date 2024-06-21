import { IsInt, IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { Sala } from 'src/salas/entities/sala.entity';

export class EspacioDTO {
    @IsInt()
    @IsNotEmpty()
    id_espacio: number;

    @IsInt()
    @IsNotEmpty()
    fila: number;

    @IsInt()
    @IsNotEmpty()
    columna: number;

    @IsObject()
    @ValidateNested()
    @Type(() => Sala)
    sala: Sala;
}