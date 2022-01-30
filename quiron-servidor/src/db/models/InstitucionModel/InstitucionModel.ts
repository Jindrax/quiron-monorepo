import {BaseEntity, Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Institucion} from "@quiron/classes/dist/entities";
import {InstitucionClienteContactoModel} from "./InstitucionClienteContactoModel";

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

    @OneToMany(type => InstitucionClienteContactoModel, conexion => conexion.institucion)
    contactos: InstitucionClienteContactoModel[];

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