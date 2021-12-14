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
exports.CampoImagen = exports.DiccionarioImagenType = exports.ImagenType = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var ImagenType;
(function (ImagenType) {
    ImagenType["preloaded"] = "preloaded";
    ImagenType["load"] = "load";
})(ImagenType = exports.ImagenType || (exports.ImagenType = {}));
var DiccionarioImagenType;
(function (DiccionarioImagenType) {
    DiccionarioImagenType["preloaded"] = "Precargada";
    DiccionarioImagenType["load"] = "Carga";
})(DiccionarioImagenType = exports.DiccionarioImagenType || (exports.DiccionarioImagenType = {}));
var CampoImagen = /** @class */ (function (_super) {
    __extends(CampoImagen, _super);
    function CampoImagen(etiqueta, dependiente, type, data, height, width, title) {
        var _this = _super.call(this, index_1.TiposElementos.imagen, etiqueta, dependiente) || this;
        _this.type = type ? type : ImagenType.preloaded;
        _this.data = data ? data : '';
        _this.height = height ? height : 100;
        _this.width = width ? width : 100;
        _this.title = title ? title : true;
        return _this;
    }
    return CampoImagen;
}(Campo_1.Campo));
exports.CampoImagen = CampoImagen;
//# sourceMappingURL=CampoImagen.js.map