export interface EquipoAtributoConstructor {
    id?: string;
    identificador?: string;
    descripcion?: string;
}

export class EquipoAtributo {
    id?: string;
    identificador: string;
    descripcion: string;

    constructor({id, identificador, descripcion}: EquipoAtributoConstructor) {
        this.id = id;
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
    }
}