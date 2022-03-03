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
exports.InstitucionModel = void 0;
const typeorm_1 = require("typeorm");
const InstitucionClienteContactoModel_1 = require("./InstitucionClienteContactoModel");
const CommonEntity_1 = require("../CommonEntity");
const ClienteModel_1 = require("../ClienteModel");
const EquipoModel_1 = require("../EquipoModel/EquipoModel");
const OTModel_1 = require("../OTModel");
let InstitucionModel = class InstitucionModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], InstitucionModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InstitucionModel.prototype, "identificacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], InstitucionModel.prototype, "latitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "float" }),
    __metadata("design:type", Number)
], InstitucionModel.prototype, "longitud", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InstitucionModel.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InstitucionModel.prototype, "ciudad", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InstitucionModel.prototype, "departamento", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => InstitucionClienteContactoModel_1.InstitucionClienteContactoModel, conexion => conexion.institucion),
    __metadata("design:type", Array)
], InstitucionModel.prototype, "contactos", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => ClienteModel_1.ClienteModel, (cliente) => cliente.instituciones),
    __metadata("design:type", Array)
], InstitucionModel.prototype, "clientes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EquipoModel_1.EquipoModel, equipo => equipo.institucion),
    __metadata("design:type", EquipoModel_1.EquipoModel)
], InstitucionModel.prototype, "equipos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OTModel_1.OTModel, ot => ot.institucion),
    __metadata("design:type", Array)
], InstitucionModel.prototype, "ots", void 0);
InstitucionModel = __decorate([
    (0, typeorm_1.Entity)()
], InstitucionModel);
exports.InstitucionModel = InstitucionModel;
