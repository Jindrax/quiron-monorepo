import {BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {PlantillaModel} from "../PlantillaModel";

@Entity()
export class ServicioModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToMany(type => PlantillaModel)
    plantillas: PlantillaModel[];
    @Column({type: "jsonb"})
    atributos: Record<string, any>;
}