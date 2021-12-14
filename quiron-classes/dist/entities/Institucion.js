"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Contacto_1 = __importDefault(require("./Contacto"));
var Institucion = /** @class */ (function () {
    function Institucion(_a) {
        var id = _a.id, identificacion = _a.identificacion, latitud = _a.latitud, longitud = _a.longitud, direccion = _a.direccion, ciudad = _a.ciudad, departamento = _a.departamento, contactos = _a.contactos;
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.latitud = latitud ? latitud : 0;
        this.longitud = longitud ? longitud : 0;
        this.direccion = direccion ? direccion : "";
        this.ciudad = ciudad ? ciudad : "";
        this.departamento = departamento ? departamento : "";
        this.contactos = contactos ? contactos.map(function (element) {
            return new Contacto_1.default(element);
        }) : [];
    }
    return Institucion;
}());
exports.default = Institucion;
//# sourceMappingURL=Institucion.js.map