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
const ClienteModel_1 = require("../db/models/ClienteModel");
class Clientes {
    static crear({ cliente }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                delete cliente.id;
                const clienteDB = new ClienteModel_1.ClienteModel();
                clienteDB.fromCommonEntity(cliente);
                yield clienteDB.save();
            }
            catch (e) {
                throw e;
            }
        });
    }
    static buscar({ filtro, opciones }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!opciones) {
                    opciones = [];
                }
                filtro = JSON.parse(filtro);
                console.log(opciones, opciones);
                const repo = (0, typeorm_1.getRepository)(ClienteModel_1.ClienteModel);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    let query = repo.createQueryBuilder("clientes");
                    switch (key) {
                        case "nombre":
                            query = query.where("clientes.nombre ILIKE :nombre", { nombre: `%${filtro[key]}%` });
                            break;
                        case "identificacion":
                            query = query.where("clientes.identificacion ILIKE :identificacion", { identificacion: `%${filtro[key]}%` });
                            break;
                    }
                    // opciones.forEach(relation => {
                    //     query = query.leftJoinAndSelect(`clientes.${relation}`, relation);
                    // });
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
    static instituciones({ cliente }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, typeorm_1.getConnection)()
                .createQueryBuilder()
                .relation(ClienteModel_1.ClienteModel, "instituciones")
                .of(cliente)
                .loadMany();
        });
    }
}
exports.default = Clientes;
