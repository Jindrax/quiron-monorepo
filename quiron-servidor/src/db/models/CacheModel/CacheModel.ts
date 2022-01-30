import {BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioModel} from "../UsuarioModel";
import {Plantilla} from "@quiron/classes/dist/entities";

@Entity()
export class CacheModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @OneToOne(type => UsuarioModel)
    @JoinColumn()
    usuario: UsuarioModel;
    @Column()
    usuarioId: string;
    @Column({
        type: "jsonb"
    })
    plantillas: Plantilla[];
}