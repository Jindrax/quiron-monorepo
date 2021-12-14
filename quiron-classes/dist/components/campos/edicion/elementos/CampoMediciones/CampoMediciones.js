"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoMediciones = void 0;
var Campo_1 = require("../../Campo");
var index_1 = require("../../../index");
var CampoMediciones = /** @class */ (function (_super) {
    __extends(CampoMediciones, _super);
    function CampoMediciones(etiqueta, dependiente, etiquetaMedida) {
        var _this = _super.call(this, index_1.TiposElementos.mediciones, etiqueta, dependiente) || this;
        _this.etiquetaMedida = etiquetaMedida ? etiquetaMedida : "";
        _this.medidas = [];
        _this.medidasMinimas = 0;
        _this.descriptorInstrucciones = "Dial";
        _this.medidasMaximas = 0;
        _this.necesitaRango = true;
        _this.necesitaGrafica = false;
        return _this;
    }
    CampoMediciones.prototype.addMedida = function (medida) {
        this.medidas.push(medida);
    };
    CampoMediciones.prototype.setMedidasMinimas = function (value) {
        this.medidasMinimas = value;
    };
    return CampoMediciones;
}(Campo_1.Campo));
exports.CampoMediciones = CampoMediciones;
//# sourceMappingURL=CampoMediciones.js.map