import {Usuario} from "@quiron/classes/entities";
import {UsuarioModel} from "../db/models/UsuarioModel";
import {getRepository, SelectQueryBuilder} from "typeorm";

export default class Usuarios {
    static async crear(usuario: Usuario) {
        try {
            const newUsuario = new UsuarioModel();
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
            await newUsuario.save();
        } catch (e) {
            throw e;
        }
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            console.log(filtro);
            const repo = getRepository<UsuarioModel>(UsuarioModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<UsuarioModel> = repo.createQueryBuilder("usuarios");
                switch (key) {
                    case "nombres":
                        query = query.where(
                            "usuarios.nombres ILIKE :nombres",
                            {nombres: `%${filtro[key]}%`});
                        break;
                    case "apellidos":
                        query = query.where(
                            "usuarios.apellidos ILIKE :apellidos",
                            {apellidos: `%${filtro[key]}%`});
                        break;
                    case "identificacion":
                        query = query.where(
                            "usuarios.identificacion ILIKE :identificacion",
                            {identificacion: `%${filtro[key]}%`});
                        break;
                }
                return await query.leftJoinAndSelect("usuarios.roles", "roles")
                    .getMany();
            } else {
                console.log(await repo.find());
                return await repo.find();
            }
        } catch (e) {
            throw e;
        }
    }
}