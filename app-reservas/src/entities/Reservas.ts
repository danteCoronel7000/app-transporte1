import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservas extends BaseEntity{
@PrimaryGeneratedColumn()
ReservaID: number;   
@Column()
UsuarioID: string;
@Column()
HorarioID: number;
@Column({type: "date"})
FechaReserva: string;
@Column()
Asientos: number;
@Column({type: "varchar", length: 20})
Estado: string;
}
