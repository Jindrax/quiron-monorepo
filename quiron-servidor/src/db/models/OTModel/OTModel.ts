import {BaseEntity, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EquipoModel} from "../EquipoModel/EquipoModel";
import {OTTraceModel} from "../Traces";
import {FormularioModel} from "../FormularioModel/FormularioModel";
import {ServicioModel} from "../ServicioModel/ServicioModel";
import {ClienteModel} from "../ClienteModel";

@Entity()
export class OTModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(type => EquipoModel, equipo => equipo.ots)
    equipo: EquipoModel;
    @ManyToOne(type => ClienteModel)
    cliente: ClienteModel;
    @ManyToOne(type => ServicioModel)
    servicio: ServicioModel;
    @OneToMany(type => FormularioModel, formulario => formulario.ot)
    formularios: FormularioModel[];
    @OneToMany(type => OTTraceModel, trace => trace.ot)
    traces: OTTraceModel;
}