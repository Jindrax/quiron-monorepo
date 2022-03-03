import {getRepository, SelectQueryBuilder} from "typeorm";
import {PatronModel} from "../db/models/PatronModel";
import {Patron} from "@quiron/classes/dist/entities";
import Servicio from "@quiron/classes/dist/entities/Servicio";
import {ServicioModel} from "../db/models/ServicioModel/ServicioModel";

export default class Servicios {
    static async crear({servicio}: { servicio: Servicio }) {
        delete servicio.id;
        const servicioDB: ServicioModel = new ServicioModel();
        servicioDB.fromCommonEntity(servicio);
        await servicioDB.save();
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<ServicioModel>(ServicioModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<ServicioModel> = repo.createQueryBuilder("servicios");
                switch (key) {
                    case "identificador":
                        query = query.where(
                            "servicios.identificacion ILIKE :identificador",
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