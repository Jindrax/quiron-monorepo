import {Rol} from "quiron_classes/entities";
import {AuthDirectory} from "../auth/AuthDirectory";
import {RolModel} from "../db/models/RolModel";
import {getRepository, ILike} from "typeorm";

export default class Roles {
    static async getResources() {
        return AuthDirectory.directory;
    }

    static async crear(rol: Rol) {
        try {
            const newRol = new RolModel();
            newRol.identificador = rol.identificador;
            newRol.descripcion = rol.descripcion;
            newRol.permisos = rol.permisos;
            await newRol.save();
        } catch (e) {
            throw e;
        }
    }

    static async buscar({filtro, opciones}: { filtro: any, opciones: any }) {
        try {
            filtro = filtro ? JSON.parse(filtro) : {};
            opciones = opciones ? JSON.parse(opciones) : {};
            let findOptions: Record<string, any> = {};
            findOptions = {
                ...opciones,
                ...findOptions,
            };
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                findOptions[key] = ILike(`%${filtro[key]}%`);
            }
            const repo = getRepository<RolModel>(RolModel);
            return await repo.find(findOptions);
        } catch (e) {
            throw e;
        }
    }
}