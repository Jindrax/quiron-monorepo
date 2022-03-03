"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoCheckList = void 0;
var Campo_1 = require("../../Campo");
var index_1 = require("../../../index");
var CampoCheckList = /** @class */ (function (_super) {
    __extends(CampoCheckList, _super);
    function CampoCheckList(etiqueta, dependiente, items, validadores, condicionales) {
        var _this = _super.call(this, index_1.TiposElementos.checkList, etiqueta, dependiente) || this;
        _this.items = items ? items : [];
        _this.validadores = validadores ? validadores : [];
        _this.condicionales = condicionales ? condicionales : [];
        return _this;
    }
    return CampoCheckList;
}(Campo_1.Campo));
exports.CampoCheckList = CampoCheckList;
//# sourceMappingURL=CampoCheckList.js.map