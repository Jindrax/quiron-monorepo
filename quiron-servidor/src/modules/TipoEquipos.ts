import {CRUDEntity} from "../db/models/CRUDEntity";
import {TipoEquipoModel} from "../db/models/EquipoModel/TipoEquipoModel";
import {TipoEquipo} from "quiron_classes/dist/entities/tipos/TipoEquipo";

export default class TipoEquipos {
    static repo: CRUDEntity<TipoEquipos, TipoEquipoModel> = new CRUDEntity<TipoEquipos, TipoEquipoModel>(TipoEquipoModel);

    static async crear({tipo}: { tipo: TipoEquipo }) {
        await TipoEquipos.repo.createEntity(tipo);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await TipoEquipos.repo.retrieveEntity(JSON.parse(filtro), []);
        } catch (e) {
            throw e;
        }
    }
}