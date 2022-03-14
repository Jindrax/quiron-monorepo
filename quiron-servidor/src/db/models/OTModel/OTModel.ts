import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {EquipoModel} from "../EquipoModel/EquipoModel";
import {OTTraceModel} from "../Traces";
import {FormularioModel} from "../FormularioModel/FormularioModel";
import {ServicioModel} from "../ServicioModel/ServicioModel";
import {ClienteModel} from "../ClienteModel";
import {CommonEntity} from "../CommonEntity";
import {OrdenTrabajo} from "@quiron/classes/dist/entities";
import {InstitucionModel} from "../InstitucionModel";

@Entity()
export class OTModel extends CommonEntity<OrdenTrabajo> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @ManyToOne(type => ServicioModel, servicio => servicio.ots)
    servicio: ServicioModel;
    @ManyToOne(type => EquipoModel, equipo => equipo.ots)
    equipo: EquipoModel;
    @ManyToOne(type => ClienteModel, cliente => cliente.ots)
    cliente: ClienteModel;
    @ManyToOne(type => InstitucionModel, institucion => institucion.ots)
    institucion: InstitucionModel;
    @OneToMany(type => FormularioModel, formulario => formulario.ot)
    formularios: FormularioModel[];
    // @OneToMany(type => OTTraceModel, trace => trace.ot)
    // traces: OTTraceModel[];
}