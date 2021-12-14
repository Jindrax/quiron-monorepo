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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearToken = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const quiron_classes_1 = require("quiron_classes");
const typeorm_1 = require("typeorm");
const UsuarioModel_1 = require("../db/models/UsuarioModel");
const AuthDirectory_1 = require("../auth/AuthDirectory");
function crearToken(payload) {
    return jsonwebtoken_1.default.sign(payload, String(process.env.JWT_SECRET));
}
exports.crearToken = crearToken;
/**
 * Funcion que evalua una contraseña y se resuelve si esta es correcta, en caso contrario se rechaza
 */
function verificarPassword(texto_plano, hash) {
    const verificacion = bcrypt_1.default.compareSync(texto_plano, hash);
    if (verificacion) {
        return true;
    }
    else {
        throw new quiron_classes_1.errors.ErrorCredencialesIncorrectas();
    }
}
/**
 * Funcion que encripta la contraseña que recibe como argumento
 */
function generarHash(texto_plano) {
    try {
        return bcrypt_1.default.hashSync(texto_plano, 4);
    }
    catch (e) {
        return e;
    }
}
class Autenticador {
    /**
     * Funcion que recibe credenciales de un cliente y las verifica
     */
    static iniciarSesion({ identificacion, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield (0, typeorm_1.getRepository)(UsuarioModel_1.UsuarioModel).findOne({
                where: {
                    identificacion
                },
                relations: ["roles"]
            });
            if (usuario == undefined)
                throw new quiron_classes_1.errors.ErrorUsuarioNoEncontrado();
            else if (usuario.no_informacion)
                throw new quiron_classes_1.errors.ErrorFaltaInformacion();
            else if (usuario.cambiar_password)
                throw new quiron_classes_1.errors.ErrorCambiarPass();
            try {
                verificarPassword(password, usuario.password);
                let permisos = {};
                let permisosFront = {};
                for (const rol of usuario.roles) {
                    console.log(rol.permisos);
                    if (rol.identificador == "SystemAdmin") {
                        permisos = AuthDirectory_1.AuthDirectory.directory;
                        for (const permission in AuthDirectory_1.AuthDirectory.directory) {
                            permisosFront[permission] = true;
                        }
                        break;
                    }
                    permisos = Object.assign(Object.assign({}, permisos), rol.permisos);
                    for (const permission in rol.permisos) {
                        permisosFront[permission] = true;
                    }
                }
                let token = crearToken({
                    identificacion: usuario.identificacion,
                    nombres: usuario.nombres,
                    apellidos: usuario.apellidos,
                    _id: usuario.id,
                    permisos
                });
                return {
                    token,
                    id: usuario.id,
                    nombres: usuario.nombres,
                    apellidos: usuario.apellidos,
                    firma: usuario.firma,
                    permisos: permisosFront
                };
            }
            catch (e) {
                throw e;
            }
        });
    }
    /**
     * Funcion que cambia la contraseña del usuario en la base de datos
     */
    static cambiarPassword({ identificacion, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield (0, typeorm_1.getRepository)(UsuarioModel_1.UsuarioModel).findOne({
                    where: {
                        identificacion
                    }
                });
                if (usuario == null)
                    throw new quiron_classes_1.errors.ErrorUsuarioNoEncontrado();
                if (!usuario.cambiar_password)
                    throw new quiron_classes_1.errors.ErrorSinAutorizacion();
                usuario.password = generarHash(password);
                usuario.cambiar_password = false;
                yield usuario.save();
            }
            catch (e) {
                throw e;
            }
        });
    }
    static cerrarSesion() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    /**
     * Funcion que actualiza la informacion de un usuario en la base de datos
     */
    static actualizarInformacion({ identificacion, password, cambios }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield (0, typeorm_1.getRepository)(UsuarioModel_1.UsuarioModel).findOne({
                    where: {
                        identificacion
                    }
                });
                if (usuario == null)
                    throw new quiron_classes_1.errors.ErrorUsuarioNoEncontrado();
                if (!usuario.no_informacion)
                    throw new quiron_classes_1.errors.ErrorFaltaInformacion();
                let hash = generarHash(password);
                usuario.cambiar_password = false;
                usuario.no_informacion = false;
                usuario.password = hash;
                usuario.firma = cambios.firma;
                yield usuario.save();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Autenticador;
