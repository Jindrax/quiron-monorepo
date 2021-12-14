"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Referencia = exports.TipoReferencia = void 0;
var TipoReferencia;
(function (TipoReferencia) {
    TipoReferencia["PLANTILLA"] = "Plantilla";
    TipoReferencia["EQUIPO"] = "Equipo";
    TipoReferencia["CLIENTE"] = "Cliente";
    TipoReferencia["SERVICIO"] = "Servicio";
})(TipoReferencia = exports.TipoReferencia || (exports.TipoReferencia = {}));
var Referencia = /** @class */ (function () {
    function Referencia(activated, tipo, identificador) {
        this.activated = activated ? activated : false;
        this.tipo = tipo ? tipo : TipoReferencia.PLANTILLA;
        this.identificador = identificador ? identificador : "raiz";
    }
    return Referencia;
}());
exports.Referencia = Referencia;
//# sourceMappingURL=Referencia.js.map