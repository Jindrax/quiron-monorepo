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
exports.CampoFecha = exports.DiccionarioDateType = exports.DateType = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var DateType;
(function (DateType) {
    DateType["implicit"] = "implicit";
    DateType["explicit"] = "explicit";
})(DateType = exports.DateType || (exports.DateType = {}));
var DiccionarioDateType;
(function (DiccionarioDateType) {
    DiccionarioDateType["implicit"] = "Implicita";
    DiccionarioDateType["explicit"] = "Explicita";
})(DiccionarioDateType = exports.DiccionarioDateType || (exports.DiccionarioDateType = {}));
var CampoFecha = /** @class */ (function (_super) {
    __extends(CampoFecha, _super);
    function CampoFecha(etiqueta, dependiente, date_type, date, hour, format) {
        var _this = _super.call(this, index_1.TiposElementos.fecha, etiqueta, dependiente) || this;
        _this.date_type = date_type ? date_type : DateType.implicit;
        _this.date = date ? date : false;
        _this.hour = hour ? hour : false;
        _this.format = format ? format : 'DD-MM-AAAA';
        return _this;
    }
    return CampoFecha;
}(Campo_1.Campo));
exports.CampoFecha = CampoFecha;
//# sourceMappingURL=CampoFecha.js.map