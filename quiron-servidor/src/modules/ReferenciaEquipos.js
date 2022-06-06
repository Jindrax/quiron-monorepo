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
const ReferenciaEquipoModel_1 = require("../db/models/ReferenciaEquipoModel");
class ReferenciaEquipos {
    static crear({ referenciaEquipo }) {
        return __awaiter(this, void 0, void 0, function* () {
            delete referenciaEquipo.id;
            const referenciaEquipoDB = new ReferenciaEquipoModel_1.ReferenciaEquipoModel();
            referenciaEquipoDB.fromCommonEntity(referenciaEquipo);
            yield referenciaEquipoDB.save();
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                filtro = JSON.parse(filtro);
                const repo = (0, typeorm_1.getRepository)(ReferenciaEquipoModel_1.ReferenciaEquipoModel);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    let query = repo.createQueryBuilder("referenciaEquipos");
                    switch (key) {
                        case "identificador":
                            query = query.where("referenciaEquipos.identificacion ILIKE :identificador", { identificacion: `%${filtro[key]}%` });
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
exports.default = ReferenciaEquipos;
