"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenciaEquipo = exports.Cliente = exports.Institucion = exports.Contacto = exports.Plantilla = exports.Formulario = exports.Rol = exports.OrdenTrabajo = exports.Usuario = exports.Equipo = void 0;
var Equipo_1 = require("./Equipo");
Object.defineProperty(exports, "Equipo", { enumerable: true, get: function () { return __importDefault(Equipo_1).default; } });
var Usuario_1 = require("./Usuario");
Object.defineProperty(exports, "Usuario", { enumerable: true, get: function () { return __importDefault(Usuario_1).default; } });
var OrdenTrabajo_1 = require("./OrdenTrabajo");
Object.defineProperty(exports, "OrdenTrabajo", { enumerable: true, get: function () { return __importDefault(OrdenTrabajo_1).default; } });
var Rol_1 = require("./Rol");
Object.defineProperty(exports, "Rol", { enumerable: true, get: function () { return __importDefault(Rol_1).default; } });
var Formulario_1 = require("./Formulario");
Object.defineProperty(exports, "Formulario", { enumerable: true, get: function () { return __importDefault(Formulario_1).default; } });
var Plantilla_1 = require("./Plantilla");
Object.defineProperty(exports, "Plantilla", { enumerable: true, get: function () { return __importDefault(Plantilla_1).default; } });
var Contacto_1 = require("./Contacto");
Object.defineProperty(exports, "Contacto", { enumerable: true, get: function () { return __importDefault(Contacto_1).default; } });
var Institucion_1 = require("./Institucion");
Object.defineProperty(exports, "Institucion", { enumerable: true, get: function () { return __importDefault(Institucion_1).default; } });
var Cliente_1 = require("./Cliente");
Object.defineProperty(exports, "Cliente", { enumerable: true, get: function () { return __importDefault(Cliente_1).default; } });
var ReferenciaEquipo_1 = require("./ReferenciaEquipo");
Object.defineProperty(exports, "ReferenciaEquipo", { enumerable: true, get: function () { return __importDefault(ReferenciaEquipo_1).default; } });
__exportStar(require("./atributos"), exports);
//# sourceMappingURL=index.js.map