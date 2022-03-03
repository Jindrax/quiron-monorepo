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
const Equipos_1 = __importDefault(require("../modules/Equipos"));
class EquiposBinder extends Binder_1.default {
    constructor(server) {
        super(server);
        this.registerEndPoint(Binder_1.RequestKind.GET, "/equipos", {
            processor: Equipos_1.default.buscar
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar Equipos"
        });
        this.registerEndPoint(Binder_1.RequestKind.POST, "/equipos", {
            processor: Equipos_1.default.crear
        }, {
            resource: "Equipo",
            action: "Crear",
            description: "Crear Equipo"
        });
        this.registerEndPoint(Binder_1.RequestKind.GET, "/equipo/:equipoID/responsable", {
            processor: Equipos_1.default.responsable
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar el responsable de un equipo"
        });
        this.registerEndPoint(Binder_1.RequestKind.GET, "/equipo/:equipoID/institucion", {
            processor: Equipos_1.default.institucion
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar la institucion del equipo"
        });
        this.registerEndPoint(Binder_1.RequestKind.GET, "/equipo/:equipoID/infoOT", {
            processor: Equipos_1.default.infoOT
        }, {
            resource: "Equipo",
            action: "Consultar",
            description: "Consultar la informacion del equipo para creacion de OT"
        });
    }
}
exports.default = EquiposBinder;
