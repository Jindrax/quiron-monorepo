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
exports.EquipoModel = void 0;
const typeorm_1 = require("typeorm");
const ClienteModel_1 = require("../ClienteModel");
const OTModel_1 = require("../OTModel");
const InstitucionModel_1 = require("../InstitucionModel");
const SearchValue_1 = __importDefault(require("../../decorators/SearchValue"));
let EquipoModel = class EquipoModel extends typeorm_1.BaseEntity {
    fromCommonEntity(entity) {
        if (entity.id) {
            this.id = entity.id;
        }
        this.serial = entity.serial;
        this.marca = entity.marca;
        this.modelo = entity.modelo;
        this.serie = entity.serie;
        this.codigo = entity.codigo;
        this.garantia = entity.garantia;
        // @ts-ignore
        this.responsable = entity.propietario;
        // @ts-ignore
        this.institucion = entity.institucion;
        // @ts-ignore
        this.ots = entity.ots;
        this.atributos = entity.atributos;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], EquipoModel.prototype, "id", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EquipoModel.prototype, "serial", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EquipoModel.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EquipoModel.prototype, "modelo", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EquipoModel.prototype, "serie", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EquipoModel.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bytea", nullable: false }),
    __metadata("design:type", Buffer)
], EquipoModel.prototype, "garantia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ClienteModel_1.ClienteModel, cliente => cliente.equipos),
    __metadata("design:type", ClienteModel_1.ClienteModel)
], EquipoModel.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => InstitucionModel_1.InstitucionModel),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", InstitucionModel_1.InstitucionModel)
], EquipoModel.prototype, "institucion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => OTModel_1.OTModel, ot => ot.equipo),
    __metadata("design:type", Array)
], EquipoModel.prototype, "ots", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", Object)
], EquipoModel.prototype, "atributos", void 0);
EquipoModel = __decorate([
    (0, typeorm_1.Entity)()
], EquipoModel);
exports.EquipoModel = EquipoModel;
