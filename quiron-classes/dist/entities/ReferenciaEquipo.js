"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var IndexableEntity_1 = __importDefault(require("./auxiliar/IndexableEntity"));
var edicion_1 = require("../components/campos/edicion");
var ReferenciaEquipo = /** @class */ (function (_super) {
    __extends(ReferenciaEquipo, _super);
    function ReferenciaEquipo(_a) {
        var id = _a.id, identificador = _a.identificador, marca = _a.marca, modelo = _a.modelo, atributos = _a.atributos, equipos = _a.equipos;
        var _this = _super.call(this, ["marca", "modelo"]) || this;
        _this.marca = "";
        _this.modelo = "";
        _this.id = id ? id : "";
        _this.identificador = identificador ? identificador : "";
        _this.marca = marca ? marca : "";
        _this.modelo = modelo ? modelo : "";
        _this.atributos = atributos ? atributos : new edicion_1.CampoSeccion("Atributos");
        _this.equipos = equipos ? equipos : [];
        return _this;
    }
    return ReferenciaEquipo;
}(IndexableEntity_1.default));
exports.default = ReferenciaEquipo;
//# sourceMappingURL=ReferenciaEquipo.js.map