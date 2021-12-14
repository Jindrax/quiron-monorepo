import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {PlantillaModel} from "../PlantillaModel";
import {FormularioTraceModel} from "../Traces/FormularioTraceModel";
import {OTModel} from "../OTModel";

@Entity()
export class FormularioModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(type => PlantillaModel)
    plantilla: PlantillaModel;
    @Column({type: "jsonb"})
    datos: Record<string, any>;
    @OneToMany(type => FormularioTraceModel, trace => trace.formulario)
    traces: FormularioTraceModel[];
    @ManyToOne(type => OTModel, ot => ot.formularios)
    ot: OTModel;
    @Column()
    finalizada: boolean;
}