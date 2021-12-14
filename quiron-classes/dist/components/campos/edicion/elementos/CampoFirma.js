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
exports.CampoFirma = exports.DiccionarioSignerType = exports.SignerType = void 0;
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var SignerType;
(function (SignerType) {
    SignerType["author"] = "author";
    SignerType["other"] = "other";
})(SignerType = exports.SignerType || (exports.SignerType = {}));
var DiccionarioSignerType;
(function (DiccionarioSignerType) {
    DiccionarioSignerType["author"] = "Autor";
    DiccionarioSignerType["other"] = "Agente Externo";
})(DiccionarioSignerType = exports.DiccionarioSignerType || (exports.DiccionarioSignerType = {}));
var CampoFirma = /** @class */ (function (_super) {
    __extends(CampoFirma, _super);
    function CampoFirma(etiqueta, dependiente, signer) {
        var _this = _super.call(this, index_1.TiposElementos.firma, etiqueta, dependiente) || this;
        _this.signer = signer ? signer : SignerType.author;
        return _this;
    }
    return CampoFirma;
}(Campo_1.Campo));
exports.CampoFirma = CampoFirma;
//# sourceMappingURL=CampoFirma.js.map