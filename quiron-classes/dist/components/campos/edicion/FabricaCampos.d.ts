import { TiposElementos } from "../index";
import { Campo } from "./Campo";
export declare class FabricaCampos {
    private static camposCreables;
    static fabricarCampoGenerico(elemento: TiposElementos): Campo;
    static fabricarCampoConEtiqueta(elemento: TiposElementos, etiqueta: string): Campo;
    private static fabricarCampoGenericoString;
}
//# sourceMappingURL=FabricaCampos.d.ts.map