"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IndexValue() {
    return (target, property) => {
        let indexes = Reflect.getMetadata("indexes", target);
        if (!indexes) {
            indexes = {};
            indexes[property] = (query, filter) => {
                return query.where(`entity.${property} = :param`, { param: filter });
            };
            Reflect.defineMetadata("indexes", indexes, target);
        }
        else {
            indexes[property] = (query, filter) => {
                return query.where(`entity.${property} = :param`, { param: filter });
            };
        }
    };
}
exports.default = IndexValue;
