import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Cliente, Institucion} from "@quiron/classes/dist/entities";
import {InstitucionClienteContactoModel} from "./InstitucionClienteContactoModel";
import {CommonEntity} from "../CommonEntity";
import {ClienteModel} from "../ClienteModel";
import {EquipoModel} from "../EquipoModel/EquipoModel";
import {OTModel} from "../OTModel";

@Entity()
export class InstitucionModel extends CommonEntity<Institucion> implements CommonEntityInterface<Institucion> {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    identificacion: string;

    @Column({type: "float"})
    latitud: number;

    @Column({type: "float"})
    longitud: number;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    @Column()
    departamento: string;

    @OneToMany(type => InstitucionClienteContactoModel, conexion => conexion.institucion)
    contactos: InstitucionClienteContactoModel[];

    @ManyToMany(()=> ClienteModel, (cliente)=>cliente.instituciones)
    clientes: ClienteModel[];

    @OneToMany(()=>EquipoModel, equipo => equipo.institucion)
    equipos: EquipoModel;

    @OneToMany(()=>OTModel, ot=>ot.institucion)
    ots: OTModel[];
}