"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonEntity = void 0;
const typeorm_1 = require("typeorm");
class CommonEntity extends typeorm_1.BaseEntity {
    fromCommonEntity(entity) {
        Object.keys(entity).forEach((value) => {
            if (entity[value] != undefined) {
                this[value] = entity[value];
            }
        });
    }
}
exports.CommonEntity = CommonEntity;
