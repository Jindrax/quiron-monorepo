"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Equipo_1 = __importDefault(require("./Equipo"));
var Formulario_1 = __importDefault(require("./Formulario"));
var Cliente_1 = __importDefault(require("./Cliente"));
var Servicio_1 = __importDefault(require("./Servicio"));
var OrdenTrabajo = /** @class */ (function () {
    function OrdenTrabajo(_a) {
        var id = _a.id, equipo = _a.equipo, cliente = _a.cliente, servicio = _a.servicio, formularios = _a.formularios;
        this.id = id ? id : "";
        this.equipo = equipo ? new Equipo_1.default(equipo) : new Equipo_1.default({});
        this.cliente = cliente ? new Cliente_1.default(cliente) : new Cliente_1.default({});
        this.servicio = servicio ? new Servicio_1.default(servicio) : new Servicio_1.default({});
        this.formularios = formularios ? formularios.map(function (element) {
            return new Formulario_1.default(element);
        }) : [];
    }
    return OrdenTrabajo;
}());
exports.default = OrdenTrabajo;
//# sourceMappingURL=OrdenTrabajo.js.map