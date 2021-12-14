import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioModel} from "../../UsuarioModel";
import {FormularioModel} from "../../FormularioModel/FormularioModel";

@Entity()
export class FormularioTraceModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    timestamp: Date;
    @Column({type: "jsonb"})
    snapshot: Record<string, any>;
    @ManyToOne(type => UsuarioModel)
    usuario: UsuarioModel;
    @ManyToOne(type => FormularioModel, formulario => formulario.traces)
    formulario: FormularioModel;
}