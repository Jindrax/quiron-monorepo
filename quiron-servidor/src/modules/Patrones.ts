import {getRepository, SelectQueryBuilder} from "typeorm";
import {PatronModel} from "../db/models/PatronModel";
import {Patron} from "@quiron/classes/dist/entities";

export default class Patrones {
    static async crear({patron}: { patron: Patron }) {
        delete patron.id;
        const patronDB: PatronModel = new PatronModel();
        patronDB.fromCommonEntity(patron);
        await patronDB.save();
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<PatronModel>(PatronModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<PatronModel> = repo.createQueryBuilder("patrones");
                switch (key) {
                    case "identificador":
                        query = query.where(
                            "patrones.identificacion ILIKE :identificador",
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