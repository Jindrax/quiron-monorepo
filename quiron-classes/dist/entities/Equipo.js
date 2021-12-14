"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var OrdenTrabajo_1 = __importDefault(require("./OrdenTrabajo"));
var Cliente_1 = __importDefault(require("./Cliente"));
var Institucion_1 = __importDefault(require("./Institucion"));
var IndexableEntity_1 = __importDefault(require("./auxiliar/IndexableEntity"));
var Equipo = /** @class */ (function (_super) {
    __extends(Equipo, _super);
    function Equipo(_a) {
        var id = _a.id, serial = _a.serial, marca = _a.marca, modelo = _a.modelo, serie = _a.serie, codigo = _a.codigo, ots = _a.ots, garantia = _a.garantia, responsable = _a.responsable, institucion = _a.institucion, atributos = _a.atributos;
        var _this = _super.call(this, ["serial", "marca", "serie", "codigo"]) || this;
        _this.serial = "";
        _this.marca = "";
        _this.modelo = "";
        _this.serie = "";
        _this.codigo = "";
        _this.id = id ? id : "";
        _this.serial = serial ? serial : "";
        _this.marca = marca ? marca : "";
        _this.modelo = modelo ? modelo : "";
        _this.serie = serie ? serie : "";
        _this.codigo = codigo ? codigo : "";
        _this.garantia = garantia ? garantia : new Buffer("");
        _this.responsable = responsable ? new Cliente_1.default(responsable) : new Cliente_1.default({});
        _this.institucion = institucion ? new Institucion_1.default(institucion) : new Institucion_1.default({});
        _this.ots = ots ? ots.map(function (element) {
            return new OrdenTrabajo_1.default(element);
        }) : [];
        _this.atributos = atributos ? atributos : {};
        return _this;
    }
    return Equipo;
}(IndexableEntity_1.default));
exports.default = Equipo;
//# sourceMappingURL=Equipo.js.map