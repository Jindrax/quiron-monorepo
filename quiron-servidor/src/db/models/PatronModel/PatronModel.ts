import {CommonEntity} from "../CommonEntity";
import {Patron} from "@quiron/classes/dist/entities";
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {CampoSeccion} from "@quiron/classes/dist/components/campos/edicion";
import {EquipoModel} from "../EquipoModel/EquipoModel";

@Entity()
export class PatronModel extends CommonEntity<Patron> {
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

    @OneToMany(()=>EquipoModel, equipo=>equipo.patron)
    equipos: EquipoModel[];
}