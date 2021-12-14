import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {ContactoModel} from "../ContactoModel";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Institucion} from "quiron_classes/dist/entities";

@Entity()
export class InstitucionModel extends BaseEntity implements CommonEntityInterface<Institucion> {
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
    @ManyToMany(type => ContactoModel, contacto => contacto.instituciones)
    @JoinTable()
    contactos: ContactoModel[];

    fromCommonEntity(entity: Institucion): void {
        if (entity.id) {
            this.id = entity.id;
        }
        this.identificacion = entity.identificacion;
        this.direccion = entity.direccion;
        this.ciudad = entity.ciudad;
        this.departamento = entity.departamento;
        this.latitud = entity.latitud;
        this.longitud = entity.longitud;
        if (entity.contactos) {
            // @ts-ignore
            this.contactos = entity.contactos;
        }
    }
}