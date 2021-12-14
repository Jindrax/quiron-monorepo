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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoSeccion = void 0;
var class_transformer_1 = require("class-transformer");
var Campo_1 = require("../Campo");
var index_1 = require("../../index");
var CampoSeccion = /** @class */ (function (_super) {
    __extends(CampoSeccion, _super);
    function CampoSeccion(etiqueta, dependiente, elementos) {
        var _this = _super.call(this, index_1.TiposElementos.seccion, etiqueta, dependiente) || this;
        _this.elementos = elementos ? elementos : [];
        return _this;
    }
    __decorate([
        class_transformer_1.Type(function () { return Campo_1.Campo; }),
        __metadata("design:type", Array)
    ], CampoSeccion.prototype, "elementos", void 0);
    return CampoSeccion;
}(Campo_1.Campo));
exports.CampoSeccion = CampoSeccion;
//# sourceMappingURL=CampoSeccion.js.map