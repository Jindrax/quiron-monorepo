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
const OTModel_1 = require("../db/models/OTModel");
class OTs {
    static crear({ ot }) {
        return __awaiter(this, void 0, void 0, function* () {
            delete ot.id;
            const otDB = new OTModel_1.OTModel();
            otDB.fromCommonEntity(ot);
            console.log(ot);
            yield otDB.save();
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                filtro = JSON.parse(filtro);
                const repo = (0, typeorm_1.getRepository)(OTModel_1.OTModel);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    let query = repo.createQueryBuilder("ots");
                    switch (key) {
                        case "id":
                            query = query.where("ots.id ILIKE :id", { identificacion: `%${filtro[key]}%` });
                            break;
                    }
                    return yield query.leftJoinAndSelect("ots.servicio", "servicios")
                        .leftJoinAndSelect("ots.equipo", "equipos")
                        .leftJoinAndSelect("ots.cliente", "clientes")
                        .leftJoinAndSelect("ots.formularios", "formularios")
                        .leftJoinAndSelect("ots.institucion", "instituciones").getMany();
                }
                else {
                    return yield repo.find({ relations: ["servicio", "equipo", "cliente", "institucion", "formularios"] });
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = OTs;
