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
var PlantillaModel_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantillaModel = void 0;
const typeorm_1 = require("typeorm");
const edicion_1 = require("@quiron/classes/dist/components/campos/edicion");
const CommonEntity_1 = require("../CommonEntity");
let PlantillaModel = PlantillaModel_1 = class PlantillaModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "uuid" }),
    __metadata("design:type", String)
], PlantillaModel.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], PlantillaModel.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PlantillaModel.prototype, "identificador", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", edicion_1.CampoSeccion)
], PlantillaModel.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => PlantillaModel_1),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], PlantillaModel.prototype, "relacionadas", void 0);
PlantillaModel = PlantillaModel_1 = __decorate([
    (0, typeorm_1.Entity)()
], PlantillaModel);
exports.PlantillaModel = PlantillaModel;
