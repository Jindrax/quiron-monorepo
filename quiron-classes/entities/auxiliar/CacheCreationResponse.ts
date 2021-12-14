import Cacheable from "./Cacheable";

export default class CacheCreationResponse<T extends Cacheable>{
    logID: string = "";
    object!: T;
}