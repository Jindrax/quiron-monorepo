import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from "typeorm";
import {UsuarioModel} from "../UsuarioModel";
import {Permission} from "@quiron/classes/dist/auth";

@Entity()
export class RolModel extends BaseEntity {
    @PrimaryColumn()
    identificador: string;
    @Column()
    descripcion: string;
    @Column({
        type: "jsonb"
    })
    permisos: Record<string, Permission>;
    @ManyToMany(type => UsuarioModel, usuario => usuario.roles)
    @JoinTable()
    usuarios: UsuarioModel[];
}