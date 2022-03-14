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
exports.ServicioModel = void 0;
const typeorm_1 = require("typeorm");
const PlantillaModel_1 = require("../PlantillaModel");
const CommonEntity_1 = require("../CommonEntity");
const OTModel_1 = require("../OTModel");
const SearchValue_1 = __importDefault(require("../../decorators/SearchValue"));
const IndexValue_1 = __importDefault(require("../../decorators/IndexValue"));
let ServicioModel = class ServicioModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, IndexValue_1.default)(),
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ServicioModel.prototype, "id", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServicioModel.prototype, "identificador", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => PlantillaModel_1.PlantillaModel),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ServicioModel.prototype, "plantillas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OTModel_1.OTModel, ot => ot.servicio),
    __metadata("design:type", Array)
], ServicioModel.prototype, "ots", void 0);
ServicioModel = __decorate([
    (0, typeorm_1.Entity)()
], ServicioModel);
exports.ServicioModel = ServicioModel;
