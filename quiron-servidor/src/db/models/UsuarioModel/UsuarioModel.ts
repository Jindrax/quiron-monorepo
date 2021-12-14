import {RolModel} from "../RolModel";
import {BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UsuarioModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    identificacion: string;
    @Column()
    nombres: string;
    @Column()
    apellidos: string;
    @Column({type: "timestamptz", default: () => "CURRENT_TIMESTAMP"})
    fecha_nacimiento: Date;
    @Column()
    password: string;
    @Column()
    cambiar_password: boolean;
    @Column()
    no_informacion: boolean;
    @ManyToMany(type => RolModel, rol => rol.usuarios)
    roles: RolModel[];
    @Column("text")
    firma: string;
}