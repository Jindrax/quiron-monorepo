"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Medida = void 0;
var Rango_1 = require("./Rango");
var Medida = /** @class */ (function () {
    function Medida(instruccion, rangoInferior, rangoSuperior) {
        this.instruccion = instruccion;
        this.rango = new Rango_1.Rango(rangoInferior, rangoSuperior);
    }
    return Medida;
}());
exports.Medida = Medida;
//# sourceMappingURL=Medida.js.map