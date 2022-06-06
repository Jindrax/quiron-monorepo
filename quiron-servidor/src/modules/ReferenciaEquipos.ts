import {getRepository, SelectQueryBuilder} from "typeorm";
import {ReferenciaEquipoModel} from "../db/models/ReferenciaEquipoModel";
import {ReferenciaEquipo} from "@quiron/classes/dist/entities";

export default class ReferenciaEquipos {
    static async crear({referenciaEquipo}: { referenciaEquipo: ReferenciaEquipo }) {
        delete referenciaEquipo.id;
        const referenciaEquipoDB: ReferenciaEquipoModel = new ReferenciaEquipoModel();
        referenciaEquipoDB.fromCommonEntity(referenciaEquipo);
        await referenciaEquipoDB.save();
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<ReferenciaEquipoModel>(ReferenciaEquipoModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<ReferenciaEquipoModel> = repo.createQueryBuilder("referenciaEquipos");
                switch (key) {
                    case "identificador":
                        query = query.where(
                            "referenciaEquipos.identificacion ILIKE :identificador",
                            {identificacion: `%${filtro[key]}%`});
                        break;
                }
                return await query.getMany();
            } else {
                return await repo.find();
            }
        } catch (e) {
            throw e;
        }
    }

}