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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Binder_1 = __importStar(require("./Binder"));
const Instituciones_1 = __importDefault(require("../modules/Instituciones"));
class InstitucionesBinder extends Binder_1.default {
    constructor(server) {
        super(server);
        this.registerEndPoint(Binder_1.RequestKind.POST, "/clientes/instituciones", { processor: Instituciones_1.default.crear }, {
            resource: "Institucion",
            action: "Crear",
            description: "Crear institucion"
        });
        this.registerEndPoint(Binder_1.RequestKind.GET, "/clientes/instituciones", { processor: Instituciones_1.default.buscar }, {
            resource: "Institucion",
            action: "Consultar",
            description: "Consultar las institucion"
        });
        this.registerEndPoint(Binder_1.RequestKind.POST, "/clientes/instituciones/link", { processor: Instituciones_1.default.asociarACliente }, {
            resource: "Institucion",
            action: "Asociar",
            description: "Consultar las institucion"
        });
    }
}
exports.default = InstitucionesBinder;
