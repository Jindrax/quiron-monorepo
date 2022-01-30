import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {TipoEquipo} from "@quiron/classes/dist/entities/tipos/TipoEquipo";
import SearchValue from "../../decorators/SearchValue";

@Entity()
export class TipoEquipoModel extends BaseEntity implements CommonEntityInterface<TipoEquipo> {

    @PrimaryGeneratedColumn("uuid")
    id: string;
    @SearchValue()
    @Column()
    identificador: string;
    @Column("jsonb")
    atributos: string[];

    fromCommonEntity(entity: TipoEquipo): void {
        this.id = entity.id ? entity.id : "";
        this.identificador = entity.identificador ? entity.identificador : "";
        this.atributos = entity.atributos ? entity.atributos : [];
    }

}