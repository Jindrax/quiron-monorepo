"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario_1 = __importDefault(require("./Usuario"));
var Rol = /** @class */ (function () {
    function Rol(_a) {
        var identificador = _a.identificador, descripcion = _a.descripcion, permisos = _a.permisos, usuarios = _a.usuarios;
        this.identificador = identificador ? identificador : "";
        this.descripcion = descripcion ? descripcion : "";
        this.permisos = permisos ? permisos : {};
        this.usuarios = usuarios ? usuarios.map(function (element) {
            return new Usuario_1.default(element);
        }) : [];
    }
    return Rol;
}());
exports.default = Rol;
//# sourceMappingURL=Rol.js.map