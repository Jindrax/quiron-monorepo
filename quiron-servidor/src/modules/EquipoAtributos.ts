import {EquipoAtributo} from "quiron_classes/dist/entities";
import {CRUDEntity} from "../db/models/CRUDEntity";
import {EquipoAtributoModel} from "../db/models/EquipoModel/EquipoAtributoModel";

export default class EquipoAtributos {
    static repo: CRUDEntity<EquipoAtributo, EquipoAtributoModel> = new CRUDEntity<EquipoAtributo, EquipoAtributoModel>(EquipoAtributoModel);

    static async crear({atributo}: { atributo: EquipoAtributo }) {
        await EquipoAtributos.repo.createEntity(atributo);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await EquipoAtributos.repo.retrieveEntity(JSON.parse(filtro), []);
        } catch (e) {
            throw e;
        }
    }
}