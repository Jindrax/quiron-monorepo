import {BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn} from "typeorm";
import {CampoSeccion} from "@quiron/classes/dist/components/campos/edicion";
import {Plantilla} from "@quiron/classes/dist/entities";
import {CommonEntityInterface} from "../CommonEntityInterface";

@Entity()
export class PlantillaModel extends BaseEntity implements CommonEntityInterface<Plantilla> {
    @PrimaryColumn({type: "uuid"})
    serial: string;
    @PrimaryColumn()
    version: number;
    @Column()
    identificador: string;
    @Column({type: "jsonb"})
    modelo: CampoSeccion;
    @ManyToMany(type => PlantillaModel)
    @JoinTable()
    relacionadas: PlantillaModel[];

    fromCommonEntity(entity: Plantilla): void {
        this.serial = entity.serial;
        this.identificador = entity.identificador;
        this.version = entity.version;
        this.modelo = entity.modelo;
        // @ts-ignore
        this.relacionadas = entity.relacionadas;
    }
}