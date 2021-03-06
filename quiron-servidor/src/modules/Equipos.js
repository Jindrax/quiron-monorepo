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
const EquipoModel_1 = require("../db/models/EquipoModel/EquipoModel");
const CRUDEntity_1 = require("../db/models/CRUDEntity");
const typeorm_1 = require("typeorm");
class Equipos {
    static crear({ equipo }) {
        return __awaiter(this, void 0, void 0, function* () {
            delete equipo.id;
            yield Equipos.repo.createEntity(equipo);
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Equipos.repo.retrieveEntity(JSON.parse(filtro), ["propietario", "sucursal", "ots"]);
            }
            catch (e) {
                throw e;
            }
        });
    }
    static responsable({ equipoID }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.getConnection)()
                    .createQueryBuilder()
                    .relation(EquipoModel_1.EquipoModel, "responsable")
                    .of(equipoID)
                    .loadOne();
            }
            catch (e) {
                throw e;
            }
        });
    }
    static institucion({ equipoID }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (0, typeorm_1.getConnection)()
                    .createQueryBuilder()
                    .relation(EquipoModel_1.EquipoModel, "institucion")
                    .of(equipoID)
                    .loadOne();
            }
            catch (e) {
                throw e;
            }
        });
    }
    static infoOT({ equipoID }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const responsable = yield (0, typeorm_1.getConnection)()
                    .createQueryBuilder()
                    .relation(EquipoModel_1.EquipoModel, "responsable")
                    .of(equipoID)
                    .loadOne();
                const institucion = yield (0, typeorm_1.getConnection)()
                    .createQueryBuilder()
                    .relation(EquipoModel_1.EquipoModel, "institucion")
                    .of(equipoID)
                    .loadOne();
                return {
                    responsable,
                    institucion
                };
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = Equipos;
Equipos.repo = new CRUDEntity_1.CRUDEntity(EquipoModel_1.EquipoModel);
