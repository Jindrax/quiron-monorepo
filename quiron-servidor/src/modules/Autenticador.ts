import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {errors} from "quiron_classes";
import {ValidToken as Token} from "../../middleware/LoadToken";
import {getRepository} from "typeorm";
import {UsuarioModel} from "../db/models/UsuarioModel";
import {AuthDirectory} from "../auth/AuthDirectory";
import {Permission} from "quiron_classes/dist/auth";

export function crearToken(payload: Token): string {
    return jwt.sign(payload, String(process.env.JWT_SECRET));
}

/**
 * Funcion que evalua una contraseña y se resuelve si esta es correcta, en caso contrario se rechaza
 */
function verificarPassword(texto_plano: string, hash: string) {
    const verificacion = bcrypt.compareSync(texto_plano, hash);
    if (verificacion) {
        return true;
    } else {
        throw new errors.ErrorCredencialesIncorrectas();
    }
}

/**
 * Funcion que encripta la contraseña que recibe como argumento
 */
function generarHash(texto_plano: string): string | any {
    try {
        return bcrypt.hashSync(texto_plano, 4);
    } catch (e) {
        return e;
    }
}

export default class Autenticador {
    /**
     * Funcion que recibe credenciales de un cliente y las verifica
     */
    static async iniciarSesion({identificacion, password}: { identificacion: string, password: string }) {
        const usuario: UsuarioModel | undefined = await getRepository(UsuarioModel).findOne({
            where: {
                identificacion
            },
            relations: ["roles"]
        });
        if (usuario == undefined) throw new errors.ErrorUsuarioNoEncontrado();
        else if (usuario.no_informacion) throw new errors.ErrorFaltaInformacion();
        else if (usuario.cambiar_password) throw new errors.ErrorCambiarPass();
        try {
            verificarPassword(password, usuario.password);
            let permisos: Record<string, Permission> = {};
            let permisosFront: Record<string, boolean> = {};
            for (const rol of usuario.roles) {
                console.log(rol.permisos);
                if (rol.identificador == "SystemAdmin") {
                    permisos = AuthDirectory.directory;
                    for (const permission in AuthDirectory.directory) {
                        permisosFront[permission] = true;
                    }
                    break;
                }
                permisos = {
                    ...permisos,
                    ...rol.permisos
                }
                for (const permission in rol.permisos) {
                    permisosFront[permission] = true;
                }
            }
            let token: string = crearToken({
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
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * Funcion que cambia la contraseña del usuario en la base de datos
     */
    static async cambiarPassword({identificacion, password}: { identificacion: string, password: string }) {
        try {
            const usuario: UsuarioModel | undefined = await getRepository(UsuarioModel).findOne({
                where: {
                    identificacion
                }
            });
            if (usuario == null) throw new errors.ErrorUsuarioNoEncontrado();
            if (!usuario.cambiar_password) throw new errors.ErrorSinAutorizacion();
            usuario.password = generarHash(password);
            usuario.cambiar_password = false;
            await usuario.save();
        } catch (e) {
            throw e;
        }
    }

    static async cerrarSesion() {
        return true;
    }

    /**
     * Funcion que actualiza la informacion de un usuario en la base de datos
     */
    static async actualizarInformacion({identificacion, password, cambios}: {
        identificacion: string,
        password: string,
        cambios: any
    }) {
        try {
            const usuario: UsuarioModel | undefined = await getRepository(UsuarioModel).findOne({
                where: {
                    identificacion
                }
            });
            if (usuario == null) throw new errors.ErrorUsuarioNoEncontrado();
            if (!usuario.no_informacion) throw new errors.ErrorFaltaInformacion();
            let hash = generarHash(password);
            usuario.cambiar_password = false;
            usuario.no_informacion = false;
            usuario.password = hash;
            usuario.firma = cambios.firma;
            await usuario.save();
        } catch (error) {
            throw error;
        }
    }
}