import {Plantilla} from "quiron_classes/entities";
import {PlantillaModel} from "../db/models/PlantillaModel";
import CacheCreationResponse from "quiron_classes/dist/entities/auxiliar/CacheCreationResponse";
import {ValidToken as Token} from "../../middleware/LoadToken";
import Cache from "./Cache";
import {getRepository} from "typeorm";
import {v4} from "uuid";
import {Campo, CampoSeccion} from "quiron_classes/dist/components/campos/edicion";
import {UsuarioModel} from "../db/models/UsuarioModel";
import {PlantillaTraceModel} from "../db/models/Traces";
import {isEqual} from "lodash";
import {TiposElementos} from "quiron_classes/dist/components/campos";

interface DiffAtributo {
    att: string;
    desde: any | undefined;
    hacia: any | undefined;
}

interface DiffCampo {
    etiqueta: string;
    cambios: DiffAtributo[];
    accion: string;
}

interface CampoAny extends Campo {
    [key: string]: any
}

export default class Plantillas {
    static compareCampo(campoA: CampoAny, campoB: CampoAny): DiffCampo | null {
        let diff: DiffCampo = {
            etiqueta: campoB.etiqueta,
            cambios: [],
            accion: "modificado"
        };
        let attsA: string[] = Object.keys(campoA);
        let attsB: string[] = Object.keys(campoB);
        if (attsA.length < attsB.length) {
            for (const atts of attsB) {
                if (!isEqual(campoA[atts], campoB[atts])) {
                    diff.cambios.push({
                        att: atts,
                        desde: campoA[atts],
                        hacia: campoB[atts]
                    })
                }
            }
        } else {
            for (const atts of attsA) {
                if (!isEqual(campoA[atts], campoB[atts])) {
                    diff.cambios.push({
                        att: atts,
                        desde: campoA[atts],
                        hacia: campoB[atts]
                    })
                }
            }
        }
        return diff.cambios.length > 0 ? diff : null;
    }

    static extractDictionary(seccion: CampoSeccion, dictionary: Record<string, CampoAny>) {
        for (const campo of seccion.elementos) {
            if (campo.elemento === TiposElementos.seccion) {
                Plantillas.extractDictionary(<CampoSeccion>campo, dictionary);
            } else {
                dictionary[campo.etiqueta] = campo;
            }
        }
    }

    static keepDifferences(plantillaActual: Plantilla, plantillaNueva: Plantilla): DiffCampo[] {
        let actualDictionary: Record<string, CampoAny> = {};
        let newDictionary: Record<string, CampoAny> = {};
        const changes: DiffCampo[] = [];
        Plantillas.extractDictionary(plantillaActual.modelo, actualDictionary);
        Plantillas.extractDictionary(plantillaNueva.modelo, newDictionary);
        for (const newDictionaryKey in newDictionary) {
            if (actualDictionary[newDictionaryKey]) {
                const diff = Plantillas.compareCampo(actualDictionary[newDictionaryKey], newDictionary[newDictionaryKey]);
                if (diff) {
                    changes.push(diff);
                }
            } else {
                changes.push({
                    etiqueta: newDictionaryKey,
                    cambios: [],
                    accion: "nuevo"
                });
            }
        }
        const newKeys = Object.keys(newDictionary);
        const deleted = Object.keys(actualDictionary).filter(value => {
            return !newKeys.includes(value);
        });
        for (const deletedKey of deleted) {
            changes.push({
                etiqueta: deletedKey,
                cambios: [],
                accion: "eliminado"
            });
        }
        return changes;
    }

    static async crear({token, plantilla}: { token: Token, plantilla: Plantilla }) {
        try {
            const usuario = await getRepository<UsuarioModel>(UsuarioModel).findOne(token._id);
            const updateFlag = !!plantilla.serial;
            let diff: DiffCampo[] = [];
            if (updateFlag) {
                const plantillaActual = await getRepository<PlantillaModel>(PlantillaModel).findOne({
                    where: {serial: plantilla.serial, version: plantilla.version}
                });
                diff = Plantillas.keepDifferences(<Plantilla>plantillaActual, plantilla);
            }
            if (plantilla.serial === undefined || plantilla.serial == "") {
                plantilla.serial = v4();
            }
            const newPlantilla = new PlantillaModel();
            newPlantilla.fromCommonEntity(plantilla);
            await newPlantilla.save();
            const trace = new PlantillaTraceModel();
            trace.timestamp = new Date();
            trace.plantilla = newPlantilla;
            if (usuario) {
                trace.usuario = usuario;
            }
            if (updateFlag) {
                trace.accion = "Actualizacion de plantilla";
            } else {
                trace.accion = "Creacion de plantilla";
            }
            trace.diff = diff;
            await trace.save();
            const respuesta = new CacheCreationResponse();
            respuesta.logID = newPlantilla.serial;
            // @ts-ignore
            respuesta.object = newPlantilla;
            await Cache.descartarCache({token, tipo: "plantilla"});
            return respuesta;
        } catch (e) {
            throw e;
        }
    }

    static async buscar({filtro}: { filtro: any }) {
        try {
            filtro = JSON.parse(filtro);
            const repo = getRepository<PlantillaModel>(PlantillaModel);
            if (Object.keys(filtro).length > 0) {
                const key = Object.keys(filtro)[0];
                if (key != "serial") {
                    return await repo.createQueryBuilder("plantillas")
                        .where(
                            "plantillas.identificador ILIKE :identificador",
                            {identificador: `%${filtro[key]}%`})
                        .leftJoinAndSelect("plantillas.relacionadas", "relacionada")
                        .getMany();
                } else {
                    return await repo.createQueryBuilder("plantillas")
                        .where("plantillas.serial = :serial", {serial: filtro.serial})
                        .leftJoinAndSelect("plantillas.relacionadas", "relacionada")
                        .getMany();
                }
            } else {
                return await repo.find();
            }
        } catch (e) {
            throw e;
        }
    }
}