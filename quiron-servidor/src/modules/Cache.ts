import Cacheable from "@quiron/classes/dist/entities/auxiliar/Cacheable";
import {Plantilla} from "@quiron/classes/dist/entities";
import {CacheModel} from "../db/models/CacheModel";
import {getRepository} from "typeorm";
import {ValidToken as Token} from "../../middleware/LoadToken";

export default class Cache {

    static async getCache(usuarioId: string): Promise<CacheModel> {
        const retrievedCache: CacheModel | undefined = await getRepository(CacheModel).findOne({
            where: {
                usuarioId
            }
        });
        if (retrievedCache) {
            return retrievedCache;
        } else {
            return await Cache.newCache(usuarioId);
        }
    }

    static async newCache(usuarioId: string, elemento?: Cacheable): Promise<CacheModel> {
        let newCache: CacheModel = new CacheModel();
        newCache.usuarioId = usuarioId;
        newCache.plantillas = [];
        if (elemento) {
            if (Object.keys(elemento).length > 0) {
                // @ts-ignore
                newCache.plantillas.push(elemento);
            }
        }
        try {
            newCache = await newCache.save();
        } catch (e) {
            console.log(e);
        }
        return newCache;
    }

    static async recuperarCache({token, tipo}: { token: Token, tipo: string }) {
        try {
            const cache = await Cache.getCache(token._id);
            switch (tipo) {
                case "plantilla":
                    return cache.plantillas;
            }
        } catch (e) {
            console.log(e);
        }
    }

    static async postCache({token, elemento, tipo}: { token: Token, elemento: Cacheable, tipo: string }) {
        try {
            const cache = await Cache.getCache(token._id);
            switch (tipo) {
                case "plantilla":
                    cache.plantillas.push(<Plantilla><unknown>elemento);
                    break;
            }
            await cache.save();
        } catch (e) {
            console.log(e);
        }
    }

    static async descartarCache({token, tipo}: { token: Token, tipo: string }) {
        try {
            const cache = await Cache.getCache(token._id);
            switch (tipo) {
                case "plantilla":
                    cache.plantillas = [];
                    await cache.save();
            }
        } catch (e) {
            console.log(e);
        }
    }

}