import {Contacto} from "quiron_classes/dist/entities";
import {ContactoModel} from "../db/models/ContactoModel";
import {CRUDEntity} from "../db/models/CRUDEntity";

export default class Contactos {
    static repo: CRUDEntity<Contacto, ContactoModel> = new CRUDEntity<Contacto, ContactoModel>(ContactoModel);

    static async crear({contacto}: { contacto: Contacto }) {
        await Contactos.repo.createEntity(contacto);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await Contactos.repo.retrieveEntity(JSON.parse(filtro), ["instituciones"]);
        } catch (e) {
            throw e;
        }
    }
}