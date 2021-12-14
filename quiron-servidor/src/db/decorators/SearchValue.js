"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SearchValue() {
    return (target, property) => {
        let indexes = Reflect.getMetadata("indexes", target);
        if (!indexes) {
            indexes = {};
            indexes[property] = (query, filter) => {
                return query.where(`entity.${property} ILIKE :param`, { param: `%${filter}%` });
            };
            Reflect.defineMetadata("indexes", indexes, target);
        }
        else {
            indexes[property] = (query, filter) => {
                return query.where(`entity.${property} ILIKE :param`, { param: `%${filter}%` });
            };
        }
    };
}
exports.default = SearchValue;
