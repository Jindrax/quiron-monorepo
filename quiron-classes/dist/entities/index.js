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
exports.Cliente = exports.Institucion = exports.Contacto = exports.Plantilla = exports.Usuario = exports.OrdenTrabajo = exports.Rol = exports.Formulario = exports.Equipo = void 0;
var Equipo_1 = __importDefault(require("./Equipo"));
exports.Equipo = Equipo_1.default;
var Usuario_1 = __importDefault(require("./Usuario"));
exports.Usuario = Usuario_1.default;
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
exports.OrdenTrabajo = OrdenTrabajo_1.default;
var Rol_1 = __importDefault(require("./Rol"));
exports.Rol = Rol_1.default;
var Formulario_1 = __importDefault(require("./Formulario"));
exports.Formulario = Formulario_1.default;
var Plantilla_1 = __importDefault(require("./Plantilla"));
exports.Plantilla = Plantilla_1.default;
var Contacto_1 = __importDefault(require("./Contacto"));
exports.Contacto = Contacto_1.default;
var Institucion_1 = __importDefault(require("./Institucion"));
exports.Institucion = Institucion_1.default;
var Cliente_1 = __importDefault(require("./Cliente"));
exports.Cliente = Cliente_1.default;
__exportStar(require("./atributos"), exports);
//# sourceMappingURL=index.js.map