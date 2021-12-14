import {SelectQueryBuilder} from "typeorm";

export default function SearchValue() {
    return (target: Object, property: string) => {
        let indexes: Record<string, Function> | undefined = Reflect.getMetadata("indexes", target);
        if (!indexes) {
            indexes = {};
            indexes[property] = (query: SelectQueryBuilder<any>, filter: string) => {
                return query.where(
                    `entity.${property} ILIKE :param`,
                    {param: `%${filter}%`}
                )
            };
            Reflect.defineMetadata("indexes", indexes, target);
        } else {
            indexes[property] = (query: SelectQueryBuilder<any>, filter: string) => {
                return query.where(
                    `entity.${property} ILIKE :param`,
                    {param: `%${filter}%`}
                )
            };
        }
    }
}