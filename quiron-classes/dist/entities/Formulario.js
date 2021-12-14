"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Plantilla_1 = __importDefault(require("./Plantilla"));
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var Formulario = /** @class */ (function () {
    function Formulario(_a) {
        var id = _a.id, plantilla = _a.plantilla, datos = _a.datos, ot = _a.ot, finalizada = _a.finalizada;
        this.id = id ? id : "";
        this.plantilla = plantilla ? new Plantilla_1.default(plantilla) : new Plantilla_1.default({});
        this.datos = datos ? datos : {};
        this.ot = ot ? new OrdenTrabajo_1.default(ot) : new OrdenTrabajo_1.default({});
        this.finalizada = finalizada ? finalizada : false;
    }
    return Formulario;
}());
exports.default = Formulario;
//# sourceMappingURL=Formulario.js.map