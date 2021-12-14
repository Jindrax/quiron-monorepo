"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Institucion_1 = __importDefault(require("./Institucion"));
var Contacto = /** @class */ (function () {
    function Contacto(_a) {
        var id = _a.id, identificacion = _a.identificacion, nombres = _a.nombres, apellidos = _a.apellidos, telefonos = _a.telefonos, emails = _a.emails, instituciones = _a.instituciones;
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.telefonos = telefonos ? telefonos : [];
        this.emails = emails ? emails : [];
        this.instituciones = instituciones ? instituciones.map(function (element) {
            return new Institucion_1.default(element);
        }) : [];
    }
    return Contacto;
}());
exports.default = Contacto;
//# sourceMappingURL=Contacto.js.map