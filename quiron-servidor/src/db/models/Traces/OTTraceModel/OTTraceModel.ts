import {BaseEntity, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {OTModel} from "../../OTModel";

@Entity()
export class OTTraceModel extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    // @ManyToOne(type => OTModel, ot => ot.traces)
    // ot: OTModel;
}