import { Espacio } from "src/espacios/entities/espacio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'coworking', name: "salas"})
export class Sala {
    @PrimaryGeneratedColumn()
    id_sala: number;

    @Column()
    nombre: string;

    @OneToMany(() => Espacio, espacio => espacio.sala)
    espacios: Espacio[]

}
