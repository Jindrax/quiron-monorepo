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
const UsuarioModel_1 = require("../db/models/UsuarioModel");
const typeorm_1 = require("typeorm");
class Usuarios {
    static crear(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUsuario = new UsuarioModel_1.UsuarioModel();
                newUsuario.identificacion = usuario.identificacion;
                newUsuario.nombres = usuario.nombres;
                newUsuario.apellidos = usuario.apellidos;
                newUsuario.fecha_nacimiento = usuario.fecha_nacimiento;
                newUsuario.password = usuario.password;
                newUsuario.cambiar_password = true;
                newUsuario.no_informacion = true;
                newUsuario.firma = "";
                // @ts-ignore
                newUsuario.roles = usuario.roles;
                yield newUsuario.save();
            }
            catch (e) {
                throw e;
            }
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                filtro = JSON.parse(filtro);
                console.log(filtro);
                const repo = (0, typeorm_1.getRepository)(UsuarioModel_1.UsuarioModel);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    let query = repo.createQueryBuilder("usuarios");
                    switch (key) {
                        case "nombres":
                            query = query.where("usuarios.nombres ILIKE :nombres", { nombres: `%${filtro[key]}%` });
                            break;
                        case "apellidos":
                            query = query.where("usuarios.apellidos ILIKE :apellidos", { apellidos: `%${filtro[key]}%` });
                            break;
                        case "identificacion":
                            query = query.where("usuarios.identificacion ILIKE :identificacion", { identificacion: `%${filtro[key]}%` });
                            break;
                    }
                    return yield query.leftJoinAndSelect("usuarios.roles", "roles")
                        .getMany();
                }
                else {
                    console.log(yield repo.find());
                    return yield repo.find();
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = Usuarios;
