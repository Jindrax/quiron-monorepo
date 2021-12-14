import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {InstitucionModel} from "../InstitucionModel";
import {ContactoModel} from "../ContactoModel";
import {EquipoModel} from "../EquipoModel/EquipoModel";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Cliente} from "quiron_classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";

@Entity()
export class ClienteModel extends BaseEntity implements CommonEntityInterface<Cliente> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @SearchValue()
    @Column()
    nombre: string;
    @Column()
    @SearchValue()
    identificacion: string;
    @ManyToMany(type => InstitucionModel)
    @JoinTable()
    instituciones: InstitucionModel[];
    @OneToOne(type => InstitucionModel)
    @JoinColumn()
    institucionPrincipal: InstitucionModel;
    @ManyToMany(type => ContactoModel)
    @JoinTable()
    contactos: ContactoModel[];
    @OneToMany(type => EquipoModel, equipo => equipo.responsable)
    equipos: EquipoModel[];

    fromCommonEntity(entity: Cliente): void {
        if (entity.id) {
            this.id = entity.id;
        }
        this.identificacion = entity.identificacion;
        this.nombre = entity.nombre;
        if (entity.instituciones) {
            // @ts-ignore
            this.instituciones = entity.instituciones;
        }
        if (entity.institucionPrincipal) {
            // @ts-ignore
            this.institucionPrincipal = entity.institucionPrincipal;
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