"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Equipo_1 = __importDefault(require("./Equipo"));
var Contacto_1 = __importDefault(require("./Contacto"));
var Institucion_1 = __importDefault(require("./Institucion"));
var index_1 = require("./index");
var Cliente = /** @class */ (function () {
    function Cliente(_a) {
        var id = _a.id, nombre = _a.nombre, identificacion = _a.identificacion, direccion = _a.direccion, telefono = _a.telefono, contrato = _a.contrato, contacto = _a.contacto, contactos = _a.contactos, equipos = _a.equipos, instituciones = _a.instituciones, ots = _a.ots;
        this.id = id ? id : "";
        this.nombre = nombre ? nombre : "";
        this.identificacion = identificacion ? identificacion : "";
        this.direccion = direccion ? direccion : "";
        this.telefono = telefono ? telefono : "";
        this.contrato = contrato ? contrato : "";
        this.contacto = contacto ? contacto : new Contacto_1.default({});
        this.contactos = contactos ? contactos.map(function (element) {
            return new Contacto_1.default(element);
        }) : [];
        this.equipos = equipos ? equipos.map(function (element) {
            return new Equipo_1.default(element);
        }) : [];
        this.instituciones = instituciones ? instituciones.map(function (element) {
            return new Institucion_1.default(element);
        }) : [];
        this.ots = ots ? ots.map(function (element) {
            return new index_1.OrdenTrabajo(element);
        }) : [];
    }
    return Cliente;
}());
exports.default = Cliente;
//# sourceMappingURL=Cliente.js.map