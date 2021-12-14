import axios from "axios";

export default class Informacion {

    static DEPARTAMENTOS_CACHE:string[] = [];
    static MUNICIPIOS_CACHE: Record<string, string[]> = {};

    static async departamentos() {
        if(Informacion.DEPARTAMENTOS_CACHE.length==0){
            const res = await axios.get("https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=departamento&$group=departamento");
            Informacion.DEPARTAMENTOS_CACHE = res.data.map((dep: any) => {
                return dep.departamento
            }).sort();
        }
        return Informacion.DEPARTAMENTOS_CACHE;
    }

    static async municipios({departamento}: { departamento: string }) {
        if(!Informacion.MUNICIPIOS_CACHE[departamento]){
            const res = await axios.get("https://www.datos.gov.co/resource/xdk5-pm3f.json?$select=municipio&departamento=" + encodeURIComponent(departamento));
            Informacion.MUNICIPIOS_CACHE[departamento] = res.data.map((mun: any) => {
                return mun.municipio
            });
        }
        return Informacion.MUNICIPIOS_CACHE[departamento];
    }
}