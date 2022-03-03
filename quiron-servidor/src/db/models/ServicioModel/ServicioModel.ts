import {BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PlantillaModel} from "../PlantillaModel";
import {CommonEntity} from "../CommonEntity";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import {OTModel} from "../OTModel";

@Entity()
export class ServicioModel extends CommonEntity<Servicio> {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    identificador: string;

    @ManyToMany(type => PlantillaModel)
    @JoinTable()
    plantillas: PlantillaModel[];

    @OneToMany(()=>OTModel, ot=>ot.servicio)
    ots: OTModel[];
}