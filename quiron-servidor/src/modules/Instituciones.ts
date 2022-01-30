import {Institucion} from "@quiron/classes/dist/entities";
import {getRepository, SelectQueryBuilder} from "typeorm";
import {InstitucionModel} from "../db/models/InstitucionModel";

export default class Instituciones {
    static async crear({institucion}: { institucion: Institucion }) {
        const contactoDB: InstitucionModel = new InstitucionModel();
        contactoDB.fromCommonEntity(institucion);
        await contactoDB.save();
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<InstitucionModel>(InstitucionModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                let query: SelectQueryBuilder<InstitucionModel> = repo.createQueryBuilder("instituciones");
                switch (key) {
                    case "identificacion":
                        query = query.where(
                            "instituciones.identificacion ILIKE :identificacion",
                            {identificacion: `%${filtro[key]}%`});
                        break;
                }
                return await query.leftJoinAndSelect("instituciones.contactos", "contactos")
                    .getMany();
            } else {
                return await repo.find();
            }
        } catch (e) {
            throw e;
        }
    }
}