import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {CommonEntityInterface} from "../CommonEntityInterface";
import {EquipoAtributo} from "quiron_classes/dist/entities";
import SearchValue from "../../decorators/SearchValue";

@Entity()
export class EquipoAtributoModel extends BaseEntity implements CommonEntityInterface<EquipoAtributo> {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @SearchValue()
    @Column()
    identificador: string;
    @SearchValue()
    @Column()
    descripcion: string;

    fromCommonEntity(entity: EquipoAtributo): void {
        this.id = entity.id ? entity.id : "";
        this.identificador = entity.identificador ? entity.identificador : "";
        this.descripcion = entity.descripcion ? entity.descripcion : "";
    }
}