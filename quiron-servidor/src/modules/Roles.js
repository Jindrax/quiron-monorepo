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
const AuthDirectory_1 = require("../auth/AuthDirectory");
const RolModel_1 = require("../db/models/RolModel");
const typeorm_1 = require("typeorm");
class Roles {
    static getResources() {
        return __awaiter(this, void 0, void 0, function* () {
            return AuthDirectory_1.AuthDirectory.directory;
        });
    }
    static crear(rol) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newRol = new RolModel_1.RolModel();
                newRol.identificador = rol.identificador;
                newRol.descripcion = rol.descripcion;
                newRol.permisos = rol.permisos;
                yield newRol.save();
            }
            catch (e) {
                throw e;
            }
        });
    }
    static buscar({ filtro, opciones }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                filtro = filtro ? JSON.parse(filtro) : {};
                opciones = opciones ? JSON.parse(opciones) : {};
                let findOptions = {};
                findOptions = Object.assign(Object.assign({}, opciones), findOptions);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    findOptions[key] = (0, typeorm_1.ILike)(`%${filtro[key]}%`);
                }
                const repo = (0, typeorm_1.getRepository)(RolModel_1.RolModel);
                return yield repo.find(findOptions);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = Roles;
