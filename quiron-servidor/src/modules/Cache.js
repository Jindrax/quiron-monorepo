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
Object.defineProperty(exports, "__esModule", { value: true });
const CacheModel_1 = require("../db/models/CacheModel");
const typeorm_1 = require("typeorm");
class Cache {
    static getCache(usuarioId) {
        return __awaiter(this, void 0, void 0, function* () {
            const retrievedCache = yield (0, typeorm_1.getRepository)(CacheModel_1.CacheModel).findOne({
                where: {
                    usuarioId
                }
            });
            if (retrievedCache) {
                return retrievedCache;
            }
            else {
                return yield Cache.newCache(usuarioId);
            }
        });
    }
    static newCache(usuarioId, elemento) {
        return __awaiter(this, void 0, void 0, function* () {
            let newCache = new CacheModel_1.CacheModel();
            newCache.usuarioId = usuarioId;
            newCache.plantillas = [];
            if (elemento) {
                if (Object.keys(elemento).length > 0) {
                    // @ts-ignore
                    newCache.plantillas.push(elemento);
                }
            }
            try {
                newCache = yield newCache.save();
            }
            catch (e) {
                console.log(e);
            }
            return newCache;
        });
    }
    static recuperarCache({ token, tipo }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cache = yield Cache.getCache(token._id);
                switch (tipo) {
                    case "plantilla":
                        return cache.plantillas;
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static postCache({ token, elemento, tipo }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cache = yield Cache.getCache(token._id);
                switch (tipo) {
                    case "plantilla":
                        cache.plantillas.push(elemento);
                        break;
                }
                yield cache.save();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static descartarCache({ token, tipo }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cache = yield Cache.getCache(token._id);
                switch (tipo) {
                    case "plantilla":
                        cache.plantillas = [];
                        yield cache.save();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = Cache;
