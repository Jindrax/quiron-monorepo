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
const typeorm_1 = require("typeorm");
const PatronModel_1 = require("../db/models/PatronModel");
class Patrones {
    static crear({ patron }) {
        return __awaiter(this, void 0, void 0, function* () {
            delete patron.id;
            const patronDB = new PatronModel_1.PatronModel();
            patronDB.fromCommonEntity(patron);
            yield patronDB.save();
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                filtro = JSON.parse(filtro);
                const repo = (0, typeorm_1.getRepository)(PatronModel_1.PatronModel);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    let query = repo.createQueryBuilder("patrones");
                    switch (key) {
                        case "identificador":
                            query = query.where("patrones.identificacion ILIKE :identificador", { identificacion: `%${filtro[key]}%` });
                            break;
                    }
                    return yield query.getMany();
                }
                else {
                    return yield repo.find();
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = Patrones;
