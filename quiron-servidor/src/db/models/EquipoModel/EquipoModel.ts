import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {ClienteModel} from "../ClienteModel";
import {OTModel} from "../OTModel";
import {InstitucionModel} from "../InstitucionModel";
import {Equipo} from "@quiron/classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";
import {PatronModel} from "../PatronModel";
import {CommonEntity} from "../CommonEntity";

@Entity()
export class EquipoModel extends CommonEntity<Equipo> {
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
    // @Column({type: "bytea", nullable: false})
    // garantia: Buffer;
    @ManyToOne(type => ClienteModel, cliente => cliente.equipos)
    responsable: ClienteModel;
    @ManyToOne(type => InstitucionModel, institucion => institucion.equipos)
    institucion: InstitucionModel;
    @OneToMany(type => OTModel, ot => ot.equipo)
    ots: OTModel[];
    @Column({type: "jsonb"})
    atributos: Record<string, any>;
    @ManyToOne(() => PatronModel, patron => patron.equipos)
    patron: PatronModel;
}