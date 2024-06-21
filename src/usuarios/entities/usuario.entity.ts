import { Reserva } from "src/reservas/entities/reserva.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'coworking', name: "usuarios"})
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column()
    nombre: string;

    @OneToMany(() => Reserva, reserva => reserva.usuario)
    reservas: Reserva[]
}
