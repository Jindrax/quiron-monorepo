import {BaseEntity, getRepository, SelectQueryBuilder} from "typeorm";
import {CommonEntityInterface} from "./CommonEntityInterface";
import {CommonEntity} from "./CommonEntity";

export class CRUDEntity<T, U extends BaseEntity & CommonEntityInterface<T>> {
    modelClass: new () => U;

    constructor(modelClass: new () => U) {
        this.modelClass = modelClass;
    }

    async createEntity(entity: T) {
        const dbEntity = new this.modelClass();
        // @ts-ignore
        delete entity.id;
        dbEntity.fromCommonEntity(entity);
        await dbEntity.save();
    }

    async retrieveEntity(filter: any = {}, relations: string[] = []) {
        const repo = getRepository<U>(this.modelClass);
        if (Object.keys(filter).length > 0) {
            const key = Object.keys(filter)[0];
            let query: SelectQueryBuilder<U> = repo.createQueryBuilder("entity");
            const indexes = Reflect.getMetadata("indexes", this.modelClass.prototype);
            query = indexes[key](query, filter[key]);
            for (const relation of relations) {
                query = query.leftJoinAndSelect(`entity.${relation}`, relation);
            }
            return await query.getMany();
        } else {
            return await repo.find();
        }
    }
}