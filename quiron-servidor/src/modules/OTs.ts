import {OrdenTrabajo} from "@quiron/classes/dist/entities";
import {getRepository, SelectQueryBuilder} from "typeorm";
import {OTModel} from "../db/models/OTModel";

export default class OTs {
    static async crear({ot}: { ot: OrdenTrabajo }) {
        delete ot.id;
        const otDB: OTModel = new OTModel();
        otDB.fromCommonEntity(ot);
        console.log(ot);
        await otDB.save();
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<OTModel>(OTModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<OTModel> = repo.createQueryBuilder("ots");
                switch (key) {
                    case "id":
                        query = query.where(
                            "ots.id ILIKE :id",
                            {identificacion: `%${filtro[key]}%`});
                        break;
                }
                return await query.leftJoinAndSelect("ots.servicio", "servicios")
                    .leftJoinAndSelect("ots.equipo", "equipos")
                    .leftJoinAndSelect("ots.cliente", "clientes")
                    .leftJoinAndSelect("ots.formularios", "formularios")
                    .leftJoinAndSelect("ots.institucion", "instituciones").getMany();
            } else {
                return await repo.find({relations: ["servicio", "equipo", "cliente", "institucion", "formularios"]});
            }
        } catch (e) {
            throw e;
        }
    }

}