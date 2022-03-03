import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ContactoModel} from "../ContactoModel";
import {EquipoModel} from "../EquipoModel/EquipoModel";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Cliente, Institucion} from "@quiron/classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";
import {InstitucionClienteContactoModel, InstitucionModel} from "../InstitucionModel";
import {CommonEntity} from "../CommonEntity";
import {OTModel} from "../OTModel";

@Entity()
export class ClienteModel extends CommonEntity<Cliente> implements CommonEntityInterface<Cliente> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @SearchValue()
    @Column()
    nombre: string;
    @SearchValue()
    @Column()
    identificacion: string;
    @Column()
    direccion: string;
    @Column()
    telefono: string;
    @Column()
    contrato: string;
    @ManyToOne(type => ContactoModel)
    @JoinColumn()
    contacto: ContactoModel;
    @ManyToMany(type => ContactoModel, contacto => contacto.clientes)
    @JoinTable()
    contactos: ContactoModel[];
    @OneToMany(type => EquipoModel, equipo => equipo.responsable)
    equipos: EquipoModel[];
    @ManyToMany(() => InstitucionModel, (institucion)=>institucion.clientes)
    @JoinTable()
    instituciones: InstitucionModel[];
    @OneToMany(()=>OTModel, ot=>ot.cliente)
    ots: OTModel[];
}