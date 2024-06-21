import { Espacio } from "src/espacios/entities/espacio.entity";
import { Sesion } from "src/sesion/entities/sesion.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: 'coworking', name: "reservas"})
export class Reserva {
    @PrimaryGeneratedColumn()
    id_reserva: number;

    @ManyToOne(() => Espacio, espacio => espacio.reservas)
    @JoinColumn({name: 'id_espacio'})
    espacio: Espacio;

    @ManyToOne(() => Usuario, usuario => usuario.reservas)
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario;

    @ManyToOne(() => Sesion, sesion => sesion.reservas)
    @JoinColumn({name: 'id_sesion'})
    sesion: Sesion;


    @Column({type: 'timestamp'})
    fecha_reserva: Date;

    @Column()
    status: string;
}
