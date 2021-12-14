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
exports.CampoTabla = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var CampoTabla = /** @class */ (function (_super) {
    __extends(CampoTabla, _super);
    function CampoTabla(etiqueta, dependiente, columnas) {
        var _this = _super.call(this, index_1.TiposElementos.tabla, etiqueta, dependiente) || this;
        _this.columnas = columnas ? columnas : [];
        _this.minFilas = 0;
        _this.maxFilas = 0;
        return _this;
    }
    return CampoTabla;
}(Campo_1.Campo));
exports.CampoTabla = CampoTabla;
//# sourceMappingURL=CampoTabla.js.map