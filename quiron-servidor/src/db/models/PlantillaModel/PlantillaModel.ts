import {Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from "typeorm";
import {CampoSeccion} from "@quiron/classes/dist/components/campos/edicion";
import {Plantilla} from "@quiron/classes/dist/entities";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {CommonEntity} from "../CommonEntity";

@Entity()
export class PlantillaModel extends CommonEntity<Plantilla> implements CommonEntityInterface<Plantilla> {
    @PrimaryColumn({type: "uuid"})
    serial: string;
    @PrimaryColumn()
    version: number;
    @Column()
    identificador: string;
    @Column({type: "jsonb"})
    modelo: CampoSeccion;
    @ManyToMany(type => PlantillaModel)
    @JoinTable()
    relacionadas: PlantillaModel[];
}