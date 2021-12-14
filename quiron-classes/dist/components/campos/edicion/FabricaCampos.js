"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaCampos = void 0;
var elementos_1 = require("./elementos");
var CampoInformacion_1 = require("./elementos/CampoInformacion");
var FabricaCampos = /** @class */ (function () {
    function FabricaCampos() {
    }
    FabricaCampos.fabricarCampoGenerico = function (elemento) {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    };
    FabricaCampos.fabricarCampoConEtiqueta = function (elemento, etiqueta) {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()](etiqueta);
    };
    FabricaCampos.fabricarCampoGenericoString = function (elemento) {
        // @ts-ignore
        return new this.camposCreables[elemento.toString()]();
    };
    FabricaCampos.camposCreables = {
        'entrada-texto': elementos_1.CampoEntradaTexto,
        'entrada-numerica': elementos_1.CampoEntradaNumerica,
        seccion: elementos_1.CampoSeccion,
        chequeo: elementos_1.CampoChequeo,
        seleccion: elementos_1.CampoSeleccion,
        tabla: elementos_1.CampoTabla,
        'tabla-compuesta': elementos_1.CampoTablaCompuesta,
        parametro: elementos_1.CampoParametro,
        fecha: elementos_1.CampoFecha,
        firma: elementos_1.CampoFirma,
        imagen: elementos_1.CampoImagen,
        mediciones: elementos_1.CampoMediciones,
        informacion: CampoInformacion_1.CampoInformacion
    };
    return FabricaCampos;
}());
exports.FabricaCampos = FabricaCampos;
//# sourceMappingURL=FabricaCampos.js.map