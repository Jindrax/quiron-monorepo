import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PlantillaModel} from "../PlantillaModel";
import {FormularioTraceModel} from "../Traces/FormularioTraceModel";
import {OTModel} from "../OTModel";
import {CommonEntity} from "../CommonEntity";
import {Formulario} from "@quiron/classes/dist/entities";
import IndexValue from "../../decorators/IndexValue";

@Entity()
export class FormularioModel extends CommonEntity<Formulario> {
    @IndexValue()
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(type => PlantillaModel)
    plantilla: PlantillaModel;
    @Column()
    serial: string;
    @Column()
    identificadorPlantilla: string;
    @Column({type: "jsonb"})
    datos: Record<string, any>;
    @OneToMany(type => FormularioTraceModel, trace => trace.formulario)
    traces: FormularioTraceModel[];
    @ManyToOne(type => OTModel, ot => ot.formularios)
    ot: OTModel;
    @Column()
    finalizada: boolean;
}