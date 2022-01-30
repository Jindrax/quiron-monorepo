import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany, ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {ContactoModel} from "../ContactoModel";
import {EquipoModel} from "../EquipoModel/EquipoModel";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Cliente} from "@quiron/classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";
import {InstitucionClienteContactoModel} from "../InstitucionModel/InstitucionClienteContactoModel";

@Entity()
export class ClienteModel extends BaseEntity implements CommonEntityInterface<Cliente> {
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
    @OneToMany(type => InstitucionClienteContactoModel, conexion => conexion.cliente)
    instituciones: InstitucionClienteContactoModel[];

    fromCommonEntity(entity: Cliente): void {
        if (entity.id) {
            this.id = entity.id;
        }
        this.identificacion = entity.identificacion;
        this.nombre = entity.nombre;
        this.direccion = entity.direccion;
        this.telefono = entity.telefono;
        this.contrato = entity.contrato;
        if (entity.contacto) {
            // @ts-ignore
            this.contacto = entity.contacto;
        }
        if (entity.contactos) {
            // @ts-ignore
            this.contactos = entity.contactos;
        }
        if (entity.equipos) {
            // @ts-ignore
            this.equipos = entity.equipos;
        }

    }

}