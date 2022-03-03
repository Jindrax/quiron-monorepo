import {Cliente, Contacto} from "@quiron/classes/dist/entities";
import {ContactoModel} from "../db/models/ContactoModel";
import {CRUDEntity} from "../db/models/CRUDEntity";
import {getRepository, SelectQueryBuilder} from "typeorm";
import {ClienteModel} from "../db/models/ClienteModel";

export default class Contactos {
    static repo: CRUDEntity<Contacto, ContactoModel> = new CRUDEntity<Contacto, ContactoModel>(ContactoModel);

    static async crear({contacto}: { contacto: Contacto }) {
        delete contacto.id;
        await Contactos.repo.createEntity(contacto);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await Contactos.repo.retrieveEntity(JSON.parse(filtro), ["instituciones"]);
        } catch (e) {
            throw e;
        }
    }

    static async buscarPorCliente({filtro, opciones}: { filtro: any, opciones: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<ContactoModel>(ContactoModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<ContactoModel> = repo.createQueryBuilder("contactos");
                switch (key) {
                    case "nombres":
                        query = query.where(
                            "contactos.nombres ILIKE :nombres",
                            {nombres: `%${filtro[key]}%`});
                        break;
                    case "apellidos":
                        query = query.where(
                            "contactos.apellidos ILIKE :apellidos",
                            {apellidos: `%${filtro[key]}%`});
                        break;
                }
                // opciones.forEach(relation => {
                //     query = query.leftJoinAndSelect(`clientes.${relation}`, relation);
                // });
                return await query.getMany();
            } else {
                return await repo.find({
                    relations: opciones
                });
            }
        } catch (e) {
            throw e;
        }
    }
}