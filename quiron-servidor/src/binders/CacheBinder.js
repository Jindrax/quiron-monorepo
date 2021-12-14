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
const Cache_1 = __importDefault(require("../modules/Cache"));
class CacheBinder extends Binder_1.default {
    constructor(server) {
        super(server);
        this.registerEndPoint(Binder_1.RequestKind.GET, "/cache/:tipo", { processor: Cache_1.default.recuperarCache }, {
            resource: "Cache",
            action: "Consultar",
            description: "Consultar el cache del usuario"
        });
        this.registerEndPoint(Binder_1.RequestKind.POST, "/cache/:tipo", { processor: Cache_1.default.postCache }, {
            resource: "Cache",
            action: "Crear",
            description: "Crear o actualizar la cache del usuario"
        });
        this.registerEndPoint(Binder_1.RequestKind.DELETE, "/cache/:tipo", { processor: Cache_1.default.descartarCache }, {
            resource: "Cache",
            action: "Eliminar",
            description: "Eliminar la cache del usuario"
        });
    }
}
exports.default = CacheBinder;
