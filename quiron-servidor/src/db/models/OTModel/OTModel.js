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
exports.OTModel = void 0;
const typeorm_1 = require("typeorm");
const EquipoModel_1 = require("../EquipoModel/EquipoModel");
const FormularioModel_1 = require("../FormularioModel/FormularioModel");
const ServicioModel_1 = require("../ServicioModel/ServicioModel");
const ClienteModel_1 = require("../ClienteModel");
const CommonEntity_1 = require("../CommonEntity");
const InstitucionModel_1 = require("../InstitucionModel");
let OTModel = class OTModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], OTModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ServicioModel_1.ServicioModel, servicio => servicio.ots),
    __metadata("design:type", ServicioModel_1.ServicioModel)
], OTModel.prototype, "servicio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => EquipoModel_1.EquipoModel, equipo => equipo.ots),
    __metadata("design:type", EquipoModel_1.EquipoModel)
], OTModel.prototype, "equipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ClienteModel_1.ClienteModel, cliente => cliente.ots),
    __metadata("design:type", ClienteModel_1.ClienteModel)
], OTModel.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => InstitucionModel_1.InstitucionModel, institucion => institucion.ots),
    __metadata("design:type", InstitucionModel_1.InstitucionModel)
], OTModel.prototype, "institucion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => FormularioModel_1.FormularioModel, formulario => formulario.ot),
    __metadata("design:type", Array)
], OTModel.prototype, "formularios", void 0);
OTModel = __decorate([
    (0, typeorm_1.Entity)()
], OTModel);
exports.OTModel = OTModel;
