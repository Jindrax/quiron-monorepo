import {Equipo} from "@quiron/classes/dist/entities";
import {EquipoModel} from "../db/models/EquipoModel/EquipoModel";
import {CRUDEntity} from "../db/models/CRUDEntity";
import {getConnection} from "typeorm";

export default class Equipos {

    static repo: CRUDEntity<Equipo, EquipoModel> = new CRUDEntity<Equipo, EquipoModel>(EquipoModel);

    static async crear({equipo}: { equipo: Equipo }) {
        delete equipo.id;
        await Equipos.repo.createEntity(equipo);
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            return await Equipos.repo.retrieveEntity(JSON.parse(filtro), ["propietario", "sucursal", "ots"]);
        } catch (e) {
            throw e;
        }
    }

    static async responsable({equipoID}: { equipoID: string }) {
        try {
            return await getConnection()
                .createQueryBuilder()
                .relation(EquipoModel, "responsable")
                .of(equipoID)
                .loadOne();
        } catch (e) {
            throw e;
        }
    }

    static async institucion({equipoID}: { equipoID: string }) {
        try {
            return await getConnection()
                .createQueryBuilder()
                .relation(EquipoModel, "institucion")
                .of(equipoID)
                .loadOne();
        } catch (e) {
            throw e;
        }
    }

    static async infoOT({equipoID}: { equipoID: string }) {
        try {
            const responsable = await getConnection()
                .createQueryBuilder()
                .relation(EquipoModel, "responsable")
                .of(equipoID)
                .loadOne();
            const institucion = await getConnection()
                .createQueryBuilder()
                .relation(EquipoModel, "institucion")
                .of(equipoID)
                .loadOne();
            return {
                responsable,
                institucion
            }
        } catch (e) {
            throw e;
        }
    }
}