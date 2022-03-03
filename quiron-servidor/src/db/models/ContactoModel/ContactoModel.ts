import {Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Contacto} from "@quiron/classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";
import {InstitucionClienteContactoModel} from "../InstitucionModel";
import {ClienteModel} from "../ClienteModel";
import {CommonEntity} from "../CommonEntity";

@Entity()
export class ContactoModel extends CommonEntity<Contacto> implements CommonEntityInterface<Contacto> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    @SearchValue()
    nombres: string;
    @Column()
    @SearchValue()
    apellidos: string;
    @Column({type: "jsonb"})
    telefonos: string[];
    @Column({type: "jsonb"})
    emails: string[];
    @OneToMany(type => InstitucionClienteContactoModel, institucion => institucion.contacto)
    instituciones: InstitucionClienteContactoModel[];
    @ManyToMany(type => ClienteModel, cliente => cliente.contactos)
    clientes: ClienteModel[];
}