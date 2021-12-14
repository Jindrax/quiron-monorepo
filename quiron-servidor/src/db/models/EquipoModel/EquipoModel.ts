import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClienteModel} from "../ClienteModel";
import {OTModel} from "../OTModel";
import {InstitucionModel} from "../InstitucionModel";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {Equipo} from "quiron_classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";

@Entity()
export class EquipoModel extends BaseEntity implements CommonEntityInterface<Equipo> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @SearchValue()
    @Column()
    serial: string;
    @SearchValue()
    @Column()
    marca: string;
    @Column()
    modelo: string;
    @SearchValue()
    @Column()
    serie: string;
    @SearchValue()
    @Column()
    codigo: string;
    @Column({type: "bytea", nullable: false})
    garantia: Buffer;
    @ManyToOne(type => ClienteModel, cliente => cliente.equipos)
    responsable: ClienteModel;
    @OneToOne(type => InstitucionModel)
    @JoinColumn()
    institucion: InstitucionModel;
    @OneToMany(type => OTModel, ot => ot.equipo)
    ots: OTModel[];
    @Column({type: "jsonb"})
    atributos: Record<string, any>;

    fromCommonEntity(entity: Equipo): void {
        if (entity.id) {
            this.id = entity.id;
        }
        this.serial = entity.serial;
        this.marca = entity.marca;
        this.modelo = entity.modelo;
        this.serie = entity.serie;
        this.codigo = entity.codigo;
        this.garantia = entity.garantia;
        // @ts-ignore
        this.responsable = entity.propietario;
        // @ts-ignore
        this.institucion = entity.institucion;
        // @ts-ignore
        this.ots = entity.ots;
        this.atributos = entity.atributos;
    }

}