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
const ContactoModel_1 = require("../ContactoModel");
let InstitucionModel = class InstitucionModel extends typeorm_1.BaseEntity {
    fromCommonEntity(entity) {
        if (entity.id) {
            this.id = entity.id;
        }
        this.identificacion = entity.identificacion;
        this.direccion = entity.direccion;
        this.ciudad = entity.ciudad;
        this.departamento = entity.departamento;
        this.latitud = entity.latitud;
        this.longitud = entity.longitud;
        if (entity.contactos) {
            // @ts-ignore
            this.contactos = entity.contactos;
        }
    }
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
    (0, typeorm_1.ManyToMany)(type => ContactoModel_1.ContactoModel, contacto => contacto.instituciones),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], InstitucionModel.prototype, "contactos", void 0);
InstitucionModel = __decorate([
    (0, typeorm_1.Entity)()
], InstitucionModel);
exports.InstitucionModel = InstitucionModel;
