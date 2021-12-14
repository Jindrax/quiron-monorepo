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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var edicion_1 = require("../components/campos/edicion");
var class_transformer_1 = require("class-transformer");
var Cacheable_1 = __importDefault(require("./auxiliar/Cacheable"));
var Plantilla = /** @class */ (function (_super) {
    __extends(Plantilla, _super);
    function Plantilla(_a) {
        var serial = _a.serial, version = _a.version, identificador = _a.identificador, modelo = _a.modelo, relacionadas = _a.relacionadas;
        var _this = _super.call(this) || this;
        _this.serial = serial ? serial : "";
        _this.version = version ? version : 1;
        _this.identificador = identificador ? identificador : "";
        _this.modelo = modelo ? class_transformer_1.plainToClass(edicion_1.CampoSeccion, modelo) : new edicion_1.CampoSeccion("raiz");
        _this.relacionadas = relacionadas ? relacionadas.map(function (element) {
            return new Plantilla(element);
        }) : [];
        return _this;
    }
    __decorate([
        class_transformer_1.Type(function () { return edicion_1.CampoSeccion; }),
        __metadata("design:type", edicion_1.CampoSeccion)
    ], Plantilla.prototype, "modelo", void 0);
    return Plantilla;
}(Cacheable_1.default));
exports.default = Plantilla;
//# sourceMappingURL=Plantilla.js.map