import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rutas extends BaseEntity{
@PrimaryGeneratedColumn()
RutaID: number;   
@Column({type: "varchar", length: 100})
Origen: string;
@Column({type: "varchar", length: 100})
Destino: String;
}
