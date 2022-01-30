import {BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Contacto} from "@quiron/classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";
import {InstitucionClienteContactoModel} from "../InstitucionModel/InstitucionClienteContactoModel";
import {ClienteModel} from "../ClienteModel";

@Entity()
export class ContactoModel extends BaseEntity implements CommonEntityInterface<Contacto> {
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

    fromCommonEntity(entity: Contacto): void {
        if (entity.id) {
            this.id = entity.id;
        }
        this.nombres = entity.nombres;
        this.apellidos = entity.apellidos;
        this.telefonos = entity.telefonos;
        this.emails = entity.emails;
        // @ts-ignore
        this.instituciones = entity.instituciones;
    }

}