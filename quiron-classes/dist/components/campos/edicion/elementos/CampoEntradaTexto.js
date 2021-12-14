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
exports.CampoEntradaTexto = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var CampoEntradaTexto = /** @class */ (function (_super) {
    __extends(CampoEntradaTexto, _super);
    function CampoEntradaTexto(etiqueta, dependiente) {
        return _super.call(this, index_1.TiposElementos['entrada-texto'], etiqueta, dependiente) || this;
    }
    return CampoEntradaTexto;
}(Campo_1.Campo));
exports.CampoEntradaTexto = CampoEntradaTexto;
//# sourceMappingURL=CampoEntradaTexto.js.map