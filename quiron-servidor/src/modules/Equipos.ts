import {Equipo} from "quiron_classes/dist/entities";
import {EquipoModel} from "../db/models/EquipoModel/EquipoModel";
import {CRUDEntity} from "../db/models/CRUDEntity";

export default class Equipos {

    static repo: CRUDEntity<Equipo, EquipoModel> = new CRUDEntity<Equipo, EquipoModel>(EquipoModel);

    static async crear({equipo}: { equipo: Equipo }) {
        await Equipos.repo.createEntity(equipo);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await Equipos.repo.retrieveEntity(JSON.parse(filtro), ["propietario", "sucursal", "ots"]);
        } catch (e) {
            throw e;
        }
    }
}