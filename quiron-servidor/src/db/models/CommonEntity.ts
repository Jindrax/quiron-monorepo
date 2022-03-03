import {BaseEntity} from "typeorm";

export class CommonEntity<T> extends BaseEntity{
    fromCommonEntity(entity:T){
        Object.keys(entity).forEach((value) => {
            if((entity as any)[value] != undefined){
                (this as any)[value] = (entity as any)[value];
            }
        });
    }
}