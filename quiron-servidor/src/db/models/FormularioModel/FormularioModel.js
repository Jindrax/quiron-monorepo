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
exports.FormularioModel = void 0;
const typeorm_1 = require("typeorm");
const PlantillaModel_1 = require("../PlantillaModel");
const FormularioTraceModel_1 = require("../Traces/FormularioTraceModel");
const OTModel_1 = require("../OTModel");
const CommonEntity_1 = require("../CommonEntity");
const IndexValue_1 = __importDefault(require("../../decorators/IndexValue"));
let FormularioModel = class FormularioModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, IndexValue_1.default)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], FormularioModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => PlantillaModel_1.PlantillaModel),
    __metadata("design:type", PlantillaModel_1.PlantillaModel)
], FormularioModel.prototype, "plantilla", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormularioModel.prototype, "serial", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], FormularioModel.prototype, "identificadorPlantilla", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", Object)
], FormularioModel.prototype, "datos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => FormularioTraceModel_1.FormularioTraceModel, trace => trace.formulario),
    __metadata("design:type", Array)
], FormularioModel.prototype, "traces", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => OTModel_1.OTModel, ot => ot.formularios),
    __metadata("design:type", OTModel_1.OTModel)
], FormularioModel.prototype, "ot", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], FormularioModel.prototype, "finalizada", void 0);
FormularioModel = __decorate([
    (0, typeorm_1.Entity)()
], FormularioModel);
exports.FormularioModel = FormularioModel;
