import Servicio from "@quiron/classes/dist/entities/Servicio";
import {ServicioModel} from "../db/models/ServicioModel/ServicioModel";
import {CRUDEntity} from "../db/models/CRUDEntity";

export default class Servicios {

    static repo: CRUDEntity<Servicio, ServicioModel> = new CRUDEntity<Servicio, ServicioModel>(ServicioModel);

    static async crear({servicio}: { servicio: Servicio }) {
        await Servicios.repo.createEntity(servicio);
    }

    static async buscar({filtro, relaciones}: { filtro: any, relaciones: string[] }) {
        try {
            return await Servicios.repo.retrieveEntity(JSON.parse(filtro), relaciones);
        } catch (e) {
            throw e;
        }
    }

}