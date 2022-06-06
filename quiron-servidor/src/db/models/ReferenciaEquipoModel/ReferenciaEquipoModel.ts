import {CommonEntity} from "../CommonEntity";
import {ReferenciaEquipo} from "@quiron/classes/dist/entities";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CampoSeccion} from "@quiron/classes/dist/components/campos/edicion";
import {EquipoModel} from "../EquipoModel/EquipoModel";

@Entity()
export class ReferenciaEquipoModel extends CommonEntity<ReferenciaEquipo> {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    identificador: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column({type: "jsonb"})
    atributos: CampoSeccion;

    @OneToMany(() => EquipoModel, equipo => equipo.referenciaEquipo)
    equipos: EquipoModel[];
}