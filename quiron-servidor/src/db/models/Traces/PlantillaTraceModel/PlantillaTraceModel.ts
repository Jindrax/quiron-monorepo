import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PlantillaModel} from "../../PlantillaModel";
import {UsuarioModel} from "../../UsuarioModel";

@Entity()
export class PlantillaTraceModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(type => PlantillaModel)
    plantilla: PlantillaModel;
    @ManyToOne(type => UsuarioModel)
    usuario: UsuarioModel;
    @Column()
    accion: string;
    @Column("jsonb")
    diff?: Record<string, any>;
    @Column()
    timestamp: Date;
}