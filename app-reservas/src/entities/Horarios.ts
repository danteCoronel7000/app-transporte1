import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Horarios extends BaseEntity{
    @PrimaryGeneratedColumn()
    HorarioID: number;
    @Column()
    RutaID: number;
    @Column()
    BusID: number;
    @Column({type:"date"})
    FechaSalida: string;
    @Column({type:"time"})
    HoraSalida: string;
    @Column({type:"date"})
    FechaLlegada: string
    @Column()
    Precio: number;

}