import {
    CampoChequeo,
    CampoEntradaNumerica,
    CampoEntradaTexto,
    CampoFecha,
    CampoFirma,
    CampoImagen,
    CampoMediciones,
    CampoParametro,
    CampoSeccion,
    CampoSeleccion,
    CampoTabla,
    CampoTablaCompuesta
} from "./elementos";
import {TiposElementos} from "../index";
import {Campo} from "./Campo";
import {CampoInformacion} from "./elementos/CampoInformacion";

export class FabricaCampos {
    private static camposCreables = {
        'entrada-texto': CampoEntradaTexto,
        'entrada-numerica': CampoEntradaNumerica,
        seccion: CampoSeccion,
        chequeo: CampoChequeo,
        seleccion: CampoSeleccion,
        tabla: CampoTabla,
        'tabla-compuesta': CampoTablaCompuesta,
        parametro: CampoParametro,
        fecha: CampoFecha,
        firma: CampoFirma,
        imagen: CampoImagen,
        mediciones: CampoMediciones,
        informacion: CampoInformacion
    };

    public static fabricarCampoGenerico(elemento: TiposElementos): Campo {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    }

    public static fabricarCampoConEtiqueta(elemento: TiposElementos, etiqueta: string): Campo {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()](etiqueta);
    }

    private static fabricarCampoGenericoString(elemento: string): Campo {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    }
}