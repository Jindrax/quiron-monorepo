"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlantillaModel_1 = require("../db/models/PlantillaModel");
const CacheCreationResponse_1 = __importDefault(require("quiron_classes/dist/entities/auxiliar/CacheCreationResponse"));
const Cache_1 = __importDefault(require("./Cache"));
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const UsuarioModel_1 = require("../db/models/UsuarioModel");
const Traces_1 = require("../db/models/Traces");
const lodash_1 = require("lodash");
const campos_1 = require("quiron_classes/dist/components/campos");
class Plantillas {
    static compareCampo(campoA, campoB) {
        let diff = {
            etiqueta: campoB.etiqueta,
            cambios: [],
            accion: "modificado"
        };
        let attsA = Object.keys(campoA);
        let attsB = Object.keys(campoB);
        if (attsA.length < attsB.length) {
            for (const atts of attsB) {
                if (!(0, lodash_1.isEqual)(campoA[atts], campoB[atts])) {
                    diff.cambios.push({
                        att: atts,
                        desde: campoA[atts],
                        hacia: campoB[atts]
                    });
                }
            }
        }
        else {
            for (const atts of attsA) {
                if (!(0, lodash_1.isEqual)(campoA[atts], campoB[atts])) {
                    diff.cambios.push({
                        att: atts,
                        desde: campoA[atts],
                        hacia: campoB[atts]
                    });
                }
            }
        }
        return diff.cambios.length > 0 ? diff : null;
    }
    static extractDictionary(seccion, dictionary) {
        for (const campo of seccion.elementos) {
            if (campo.elemento === campos_1.TiposElementos.seccion) {
                Plantillas.extractDictionary(campo, dictionary);
            }
            else {
                dictionary[campo.etiqueta] = campo;
            }
        }
    }
    static keepDifferences(plantillaActual, plantillaNueva) {
        let actualDictionary = {};
        let newDictionary = {};
        const changes = [];
        Plantillas.extractDictionary(plantillaActual.modelo, actualDictionary);
        Plantillas.extractDictionary(plantillaNueva.modelo, newDictionary);
        for (const newDictionaryKey in newDictionary) {
            if (actualDictionary[newDictionaryKey]) {
                const diff = Plantillas.compareCampo(actualDictionary[newDictionaryKey], newDictionary[newDictionaryKey]);
                if (diff) {
                    changes.push(diff);
                }
            }
            else {
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
    static crear({ token, plantilla }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = yield (0, typeorm_1.getRepository)(UsuarioModel_1.UsuarioModel).findOne(token._id);
                const updateFlag = !!plantilla.serial;
                let diff = [];
                if (updateFlag) {
                    const plantillaActual = yield (0, typeorm_1.getRepository)(PlantillaModel_1.PlantillaModel).findOne({
                        where: { serial: plantilla.serial, version: plantilla.version }
                    });
                    diff = Plantillas.keepDifferences(plantillaActual, plantilla);
                }
                if (plantilla.serial === undefined || plantilla.serial == "") {
                    plantilla.serial = (0, uuid_1.v4)();
                }
                const newPlantilla = new PlantillaModel_1.PlantillaModel();
                newPlantilla.fromCommonEntity(plantilla);
                yield newPlantilla.save();
                const trace = new Traces_1.PlantillaTraceModel();
                trace.timestamp = new Date();
                trace.plantilla = newPlantilla;
                if (usuario) {
                    trace.usuario = usuario;
                }
                if (updateFlag) {
                    trace.accion = "Actualizacion de plantilla";
                }
                else {
                    trace.accion = "Creacion de plantilla";
                }
                trace.diff = diff;
                yield trace.save();
                const respuesta = new CacheCreationResponse_1.default();
                respuesta.logID = newPlantilla.serial;
                // @ts-ignore
                respuesta.object = newPlantilla;
                yield Cache_1.default.descartarCache({ token, tipo: "plantilla" });
                return respuesta;
            }
            catch (e) {
                throw e;
            }
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                filtro = JSON.parse(filtro);
                const repo = (0, typeorm_1.getRepository)(PlantillaModel_1.PlantillaModel);
                if (Object.keys(filtro).length > 0) {
                    const key = Object.keys(filtro)[0];
                    if (key != "serial") {
                        return yield repo.createQueryBuilder("plantillas")
                            .where("plantillas.identificador ILIKE :identificador", { identificador: `%${filtro[key]}%` })
                            .leftJoinAndSelect("plantillas.relacionadas", "relacionada")
                            .getMany();
                    }
                    else {
                        return yield repo.createQueryBuilder("plantillas")
                            .where("plantillas.serial = :serial", { serial: filtro.serial })
                            .leftJoinAndSelect("plantillas.relacionadas", "relacionada")
                            .getMany();
                    }
                }
                else {
                    return yield repo.find();
                }
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = Plantillas;
