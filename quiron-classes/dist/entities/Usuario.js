"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rol_1 = __importDefault(require("./Rol"));
var Usuario = /** @class */ (function () {
    function Usuario(_a) {
        var id = _a.id, identificacion = _a.identificacion, nombres = _a.nombres, apellidos = _a.apellidos, fecha_nacimiento = _a.fecha_nacimiento, password = _a.password, cambiar_password = _a.cambiar_password, no_informacion = _a.no_informacion, roles = _a.roles, firma = _a.firma;
        this.id = id ? id : "";
        this.identificacion = identificacion ? identificacion : "";
        this.nombres = nombres ? nombres : "";
        this.apellidos = apellidos ? apellidos : "";
        this.fecha_nacimiento = fecha_nacimiento ? fecha_nacimiento : new Date();
        this.password = password ? password : "";
        this.cambiar_password = cambiar_password ? cambiar_password : false;
        this.no_informacion = no_informacion ? no_informacion : false;
        this.roles = roles ? roles.map(function (element) {
            return new Rol_1.default(element);
        }) : [];
        this.firma = firma ? firma : "";
    }
    return Usuario;
}());
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map