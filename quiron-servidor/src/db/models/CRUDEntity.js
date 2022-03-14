"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDEntity = void 0;
const typeorm_1 = require("typeorm");
class CRUDEntity {
    constructor(modelClass) {
        this.modelClass = modelClass;
    }
    createEntity(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbEntity = new this.modelClass();
            // @ts-ignore
            delete entity.id;
            dbEntity.fromCommonEntity(entity);
            yield dbEntity.save();
        });
    }
    retrieveEntity(filter = {}, relations = []) {
        return __awaiter(this, void 0, void 0, function* () {
            const repo = (0, typeorm_1.getRepository)(this.modelClass);
            if (Object.keys(filter).length > 0) {
                const key = Object.keys(filter)[0];
                let query = repo.createQueryBuilder("entity");
                const indexes = Reflect.getMetadata("indexes", this.modelClass.prototype);
                query = indexes[key](query, filter[key]);
                for (const relation of relations) {
                    query = query.leftJoinAndSelect(`entity.${relation}`, relation);
                }
                return yield query.getMany();
            }
            else {
                return yield repo.find();
            }
        });
    }
}
exports.CRUDEntity = CRUDEntity;
