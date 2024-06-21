import { Reserva } from "src/reservas/entities/reserva.entity";
import { Sala } from "src/salas/entities/sala.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'coworking', name: "espacios"})
export class Espacio {
    @PrimaryGeneratedColumn()
    id_espacio: number;

    @Column()
    fila: number;

    @Column()
    columna: number;

    @ManyToOne(() => Sala ,sala => sala.espacios )
    @JoinColumn( {name: 'id_sala' })
    sala: Sala;

    @OneToMany(() => Reserva, reserva => reserva.espacio)
    reservas: Reserva[]
}
