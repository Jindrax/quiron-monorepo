"use strict";
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
exports.TipoEquipoModel = void 0;
const typeorm_1 = require("typeorm");
const SearchValue_1 = __importDefault(require("../../decorators/SearchValue"));
let TipoEquipoModel = class TipoEquipoModel extends typeorm_1.BaseEntity {
    fromCommonEntity(entity) {
        this.id = entity.id ? entity.id : "";
        this.identificador = entity.identificador ? entity.identificador : "";
        this.atributos = entity.atributos ? entity.atributos : [];
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TipoEquipoModel.prototype, "id", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TipoEquipoModel.prototype, "identificador", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb"),
    __metadata("design:type", Array)
], TipoEquipoModel.prototype, "atributos", void 0);
TipoEquipoModel = __decorate([
    (0, typeorm_1.Entity)()
], TipoEquipoModel);
exports.TipoEquipoModel = TipoEquipoModel;
