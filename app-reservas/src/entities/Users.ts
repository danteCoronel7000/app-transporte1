import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{
    @PrimaryColumn({type: "varchar", length: 8})
    UsuarioID: string;
    @Column({type: "varchar", length: 20})
    Password: string;
    @Column({type: "varchar", length: 100})
    Email: string;
}