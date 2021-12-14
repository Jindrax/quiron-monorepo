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
exports.FormularioTraceModel = void 0;
const typeorm_1 = require("typeorm");
const UsuarioModel_1 = require("../../UsuarioModel");
const FormularioModel_1 = require("../../FormularioModel/FormularioModel");
let FormularioTraceModel = class FormularioTraceModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], FormularioTraceModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], FormularioTraceModel.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", Object)
], FormularioTraceModel.prototype, "snapshot", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => UsuarioModel_1.UsuarioModel),
    __metadata("design:type", UsuarioModel_1.UsuarioModel)
], FormularioTraceModel.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => FormularioModel_1.FormularioModel, formulario => formulario.traces),
    __metadata("design:type", FormularioModel_1.FormularioModel)
], FormularioTraceModel.prototype, "formulario", void 0);
FormularioTraceModel = __decorate([
    (0, typeorm_1.Entity)()
], FormularioTraceModel);
exports.FormularioTraceModel = FormularioTraceModel;
