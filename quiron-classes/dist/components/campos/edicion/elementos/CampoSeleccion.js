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
exports.CampoSeleccion = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var CampoSeleccion = /** @class */ (function (_super) {
    __extends(CampoSeleccion, _super);
    function CampoSeleccion(etiqueta, dependiente, opciones) {
        var _this = _super.call(this, index_1.TiposElementos.seleccion, etiqueta, dependiente) || this;
        _this.opciones = opciones ? opciones : [];
        _this.radio = false;
        return _this;
    }
    return CampoSeleccion;
}(Campo_1.Campo));
exports.CampoSeleccion = CampoSeleccion;
//# sourceMappingURL=CampoSeleccion.js.map