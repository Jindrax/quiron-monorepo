import {BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {InstitucionModel} from "../InstitucionModel";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Contacto} from "quiron_classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";

@Entity()
export class ContactoModel extends BaseEntity implements CommonEntityInterface<Contacto> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @SearchValue()
    @Column()
    identificacion: string;
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
    @ManyToMany(type => InstitucionModel, institucion => institucion.contactos)
    instituciones: InstitucionModel[];

    fromCommonEntity(entity: Contacto): void {
        if (entity.id) {
            this.id = entity.id;
        }
        this.identificacion = entity.identificacion;
        this.nombres = entity.nombres;
        this.apellidos = entity.apellidos;
        this.telefonos = entity.telefonos;
        this.emails = entity.emails;
        // @ts-ignore
        this.instituciones = entity.instituciones;
    }

}