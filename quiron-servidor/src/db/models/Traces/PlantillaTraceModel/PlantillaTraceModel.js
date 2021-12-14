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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantillaTraceModel = void 0;
const typeorm_1 = require("typeorm");
const PlantillaModel_1 = require("../../PlantillaModel");
const UsuarioModel_1 = require("../../UsuarioModel");
let PlantillaTraceModel = class PlantillaTraceModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PlantillaTraceModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => PlantillaModel_1.PlantillaModel),
    __metadata("design:type", PlantillaModel_1.PlantillaModel)
], PlantillaTraceModel.prototype, "plantilla", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => UsuarioModel_1.UsuarioModel),
    __metadata("design:type", UsuarioModel_1.UsuarioModel)
], PlantillaTraceModel.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlantillaTraceModel.prototype, "accion", void 0);
__decorate([
    (0, typeorm_1.Column)("jsonb"),
    __metadata("design:type", Object)
], PlantillaTraceModel.prototype, "diff", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PlantillaTraceModel.prototype, "timestamp", void 0);
PlantillaTraceModel = __decorate([
    (0, typeorm_1.Entity)()
], PlantillaTraceModel);
exports.PlantillaTraceModel = PlantillaTraceModel;
