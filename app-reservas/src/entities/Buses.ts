import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Buses extends BaseEntity{
    @PrimaryGeneratedColumn()
    BusID: number;
    @Column({type: "varchar", length: 7})
    Placa: string;
    @Column({type: "varchar", length: 50})
    Modelo: string;
    @Column({type: "int"})
    Capacidad: number
}