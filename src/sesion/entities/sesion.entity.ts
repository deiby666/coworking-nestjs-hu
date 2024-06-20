import { Reserva } from "src/reservas/entities/reserva.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'coworking', name: "sesion"})
export class Sesion {
    @PrimaryGeneratedColumn()
    id_sesion: number;

    @Column()
    nombre: string;

    @Column()
    hora_inicio: string;

    @Column()
    hora_final: string;

    @OneToMany(() => Reserva, reserva => reserva.sesion)
    reservas: Reserva[]

}
