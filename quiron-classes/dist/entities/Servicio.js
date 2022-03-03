"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Plantilla_1 = __importDefault(require("./Plantilla"));
var index_1 = require("./index");
var Servicio = /** @class */ (function () {
    function Servicio(_a) {
        var id = _a.id, identificador = _a.identificador, plantillas = _a.plantillas, ots = _a.ots;
        this.id = id ? id : "";
        this.identificador = identificador ? identificador : "";
        this.plantillas = plantillas ? plantillas.map(function (element) {
            return new Plantilla_1.default(element);
        }) : [];
        this.ots = ots ? ots.map(function (element) {
            return new index_1.OrdenTrabajo(element);
        }) : [];
    }
    return Servicio;
}());
exports.default = Servicio;
//# sourceMappingURL=Servicio.js.map