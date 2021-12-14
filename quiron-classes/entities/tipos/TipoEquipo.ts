export interface TipoEquipoConstructor {
    id?: string;
    identificador?: string;
    atributos?: string[];
}

export class TipoEquipo {
    id?: string;
    identificador: string;
    atributos: string[];


    constructor({id, identificador, atributos}: TipoEquipoConstructor) {
        this.id = id;
        this.identificador = identificador ? identificador : "";
        this.atributos = atributos ? atributos : [];
    }
}