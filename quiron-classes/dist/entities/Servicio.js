"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Plantilla_1 = __importDefault(require("./Plantilla"));
var Servicio = /** @class */ (function () {
    function Servicio(_a) {
        var id = _a.id, plantillas = _a.plantillas, atributos = _a.atributos;
        this.id = id ? id : "";
        this.plantillas = plantillas ? plantillas.map(function (element) {
            return new Plantilla_1.default(element);
        }) : [];
        this.atributos = atributos ? atributos : {};
    }
    return Servicio;
}());
exports.default = Servicio;
//# sourceMappingURL=Servicio.js.map