"use strict";
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
exports.Campo = void 0;
var index_1 = require("../index");
var Dependiente_1 = require("./Dependiente");
var class_transformer_1 = require("class-transformer");
var Referencia_1 = require("./Referencia");
var Campo = /** @class */ (function () {
    function Campo(elemento, etiqueta, dependiente, presentacion, referencia, value) {
        this.presentacion = presentacion ? presentacion : etiqueta ? etiqueta : '';
        this.elemento = elemento ? elemento : index_1.TiposElementos.seccion;
        this.etiqueta = etiqueta ? etiqueta : '';
        this.dependiente = dependiente ? dependiente : new Dependiente_1.Dependiente();
        this.referencia = referencia ? referencia : new Referencia_1.Referencia();
        this.value = value ? value : "";
    }
    __decorate([
        class_transformer_1.Type(function () { return Dependiente_1.Dependiente; }),
        __metadata("design:type", Dependiente_1.Dependiente)
    ], Campo.prototype, "dependiente", void 0);
    return Campo;
}());
exports.Campo = Campo;
//# sourceMappingURL=Campo.js.map