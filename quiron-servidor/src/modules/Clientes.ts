import {Cliente} from "@quiron/classes/dist/entities";
import {getConnection, getRepository, SelectQueryBuilder} from "typeorm";
import {ClienteModel} from "../db/models/ClienteModel";

export default class Clientes {
    static async crear({cliente}: { cliente: Cliente }) {
        try {
            delete cliente.id;
            const clienteDB: ClienteModel = new ClienteModel();
            clienteDB.fromCommonEntity(cliente);
            await clienteDB.save();
        } catch (e) {
            throw e;
        }
    }

    static async buscar({filtro, opciones}: { filtro: any, opciones: string[] }) {
        try {
            if (!opciones) {
                opciones = [];
            }
            filtro = JSON.parse(filtro);
            console.log(opciones, opciones);
            const repo = getRepository<ClienteModel>(ClienteModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<ClienteModel> = repo.createQueryBuilder("clientes");
                switch (key) {
                    case "nombre":
                        query = query.where(
                            "clientes.nombre ILIKE :nombre",
                            {nombre: `%${filtro[key]}%`});
                        break;
                    case "identificacion":
                        query = query.where(
                            "clientes.identificacion ILIKE :identificacion",
                            {identificacion: `%${filtro[key]}%`});
                        break;
                }
                // opciones.forEach(relation => {
                //     query = query.leftJoinAndSelect(`clientes.${relation}`, relation);
                // });
                return await query.getMany();
            } else {
                return await repo.find();
            }
        } catch (e) {
            throw e;
        }
    }

    static async instituciones({cliente}: { cliente: string }) {
        return await getConnection()
            .createQueryBuilder()
            .relation(ClienteModel, "instituciones")
            .of(cliente)
            .loadMany();
    }
}