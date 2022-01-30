import {BaseEntity, Column, Entity, ManyToOne} from "typeorm";
import {InstitucionModel} from "./InstitucionModel";
import {ClienteModel} from "../ClienteModel";
import {ContactoModel} from "../ContactoModel";

@Entity()
export class InstitucionClienteContactoModel extends BaseEntity {
    @ManyToOne(type => InstitucionModel, institucion => institucion.contactos, {primary: true})
    institucion: InstitucionModel;

    @ManyToOne(type => ClienteModel, cliente => cliente.instituciones, {primary: true})
    cliente: InstitucionModel;

    @ManyToOne(type => ContactoModel, institucion => institucion.instituciones, {primary: true})
    contacto: InstitucionModel;

    @Column()
    cargo: string;
}