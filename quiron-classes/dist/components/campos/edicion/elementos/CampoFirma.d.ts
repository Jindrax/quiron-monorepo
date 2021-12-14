import { Campo } from "../Campo";
import { Dependiente } from "../Dependiente";
export declare enum SignerType {
    author = "author",
    other = "other"
}
export declare enum DiccionarioSignerType {
    author = "Autor",
    other = "Agente Externo"
}
export declare class CampoFirma extends Campo {
    signer: SignerType;
    constructor(etiqueta?: string, dependiente?: Dependiente, signer?: SignerType);
}
//# sourceMappingURL=CampoFirma.d.ts.map