"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAMPOS_REFERENCIABLES = exports.edicion = exports.DiccionarioTiposElementos = exports.TiposElementos = void 0;
var TiposElementos;
(function (TiposElementos) {
    TiposElementos["entrada-texto"] = "entrada-texto";
    TiposElementos["entrada-numerica"] = "entrada-numerica";
    TiposElementos["seccion"] = "seccion";
    TiposElementos["chequeo"] = "chequeo";
    TiposElementos["seleccion"] = "seleccion";
    TiposElementos["tabla"] = "tabla";
    TiposElementos["tabla-compuesta"] = "tabla-compuesta";
    TiposElementos["parametro"] = "parametro";
    TiposElementos["fecha"] = "fecha";
    TiposElementos["firma"] = "firma";
    TiposElementos["imagen"] = "imagen";
    TiposElementos["mediciones"] = "mediciones";
    TiposElementos["informacion"] = "informacion";
})(TiposElementos = exports.TiposElementos || (exports.TiposElementos = {}));
var DiccionarioTiposElementos;
(function (DiccionarioTiposElementos) {
    DiccionarioTiposElementos["entrada-texto"] = "Entrada de texto";
    DiccionarioTiposElementos["entrada-numerica"] = "Entrada numerica";
    DiccionarioTiposElementos["seccion"] = "Seccion";
    DiccionarioTiposElementos["chequeo"] = "Chequeo";
    DiccionarioTiposElementos["seleccion"] = "Seleccion";
    DiccionarioTiposElementos["tabla"] = "Tabla";
    DiccionarioTiposElementos["tabla-compuesta"] = "Tabla Compuesta";
    DiccionarioTiposElementos["parametro"] = "Parametro";
    DiccionarioTiposElementos["fecha"] = "Fecha";
    DiccionarioTiposElementos["firma"] = "Firma";
    DiccionarioTiposElementos["imagen"] = "Imagen";
    DiccionarioTiposElementos["mediciones"] = "Mediciones";
    DiccionarioTiposElementos["informacion"] = "Informacion";
})(DiccionarioTiposElementos = exports.DiccionarioTiposElementos || (exports.DiccionarioTiposElementos = {}));
exports.edicion = __importStar(require("./edicion"));
exports.CAMPOS_REFERENCIABLES = [
    TiposElementos["entrada-numerica"],
    TiposElementos["entrada-texto"],
    TiposElementos.chequeo,
    TiposElementos.seleccion,
    TiposElementos.tabla,
    TiposElementos.fecha,
    TiposElementos.firma,
    TiposElementos.imagen,
    TiposElementos.mediciones,
    TiposElementos.informacion
];
//# sourceMappingURL=index.js.map