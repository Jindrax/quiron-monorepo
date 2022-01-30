"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacto = /** @class */ (function () {
    function Contacto(_a) {
        var id = _a.id, identificacion = _a.identificacion, nombres = _a.nombres, apellidos = _a.apellidos, telefonos = _a.telefonos, emails = _a.emails;
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.telefonos = telefonos ? telefonos : [];
        this.emails = emails ? emails : [];
    }
    return Contacto;
}());
exports.default = Contacto;
//# sourceMappingURL=Contacto.js.map