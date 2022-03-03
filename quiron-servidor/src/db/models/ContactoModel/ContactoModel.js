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
exports.ContactoModel = void 0;
const typeorm_1 = require("typeorm");
const SearchValue_1 = __importDefault(require("../../decorators/SearchValue"));
const InstitucionModel_1 = require("../InstitucionModel");
const ClienteModel_1 = require("../ClienteModel");
const CommonEntity_1 = require("../CommonEntity");
let ContactoModel = class ContactoModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ContactoModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, SearchValue_1.default)(),
    __metadata("design:type", String)
], ContactoModel.prototype, "nombres", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, SearchValue_1.default)(),
    __metadata("design:type", String)
], ContactoModel.prototype, "apellidos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", Array)
], ContactoModel.prototype, "telefonos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", Array)
], ContactoModel.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => InstitucionModel_1.InstitucionClienteContactoModel, institucion => institucion.contacto),
    __metadata("design:type", Array)
], ContactoModel.prototype, "instituciones", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => ClienteModel_1.ClienteModel, cliente => cliente.contactos),
    __metadata("design:type", Array)
], ContactoModel.prototype, "clientes", void 0);
ContactoModel = __decorate([
    (0, typeorm_1.Entity)()
], ContactoModel);
exports.ContactoModel = ContactoModel;
