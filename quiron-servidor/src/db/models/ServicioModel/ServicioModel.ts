import {Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PlantillaModel} from "../PlantillaModel";
import {CommonEntity} from "../CommonEntity";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import {OTModel} from "../OTModel";
import SearchValue from "../../decorators/SearchValue";
import IndexValue from "../../decorators/IndexValue";

@Entity()
export class ServicioModel extends CommonEntity<Servicio> {
    @IndexValue()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @SearchValue()
    @Column()
    identificador: string;

    @ManyToMany(type => PlantillaModel)
    @JoinTable()
    plantillas: PlantillaModel[];

    @OneToMany(() => OTModel, ot => ot.servicio)
    ots: OTModel[];
}