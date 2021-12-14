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
exports.ClienteModel = void 0;
const typeorm_1 = require("typeorm");
const InstitucionModel_1 = require("../InstitucionModel");
const ContactoModel_1 = require("../ContactoModel");
const EquipoModel_1 = require("../EquipoModel/EquipoModel");
const SearchValue_1 = __importDefault(require("../../decorators/SearchValue"));
let ClienteModel = class ClienteModel extends typeorm_1.BaseEntity {
    fromCommonEntity(entity) {
        if (entity.id) {
            this.id = entity.id;
        }
        this.identificacion = entity.identificacion;
        this.nombre = entity.nombre;
        if (entity.instituciones) {
            // @ts-ignore
            this.instituciones = entity.instituciones;
        }
        if (entity.institucionPrincipal) {
            // @ts-ignore
            this.institucionPrincipal = entity.institucionPrincipal;
        }
        if (entity.contactos) {
            // @ts-ignore
            this.contactos = entity.contactos;
        }
        if (entity.equipos) {
            // @ts-ignore
            this.equipos = entity.equipos;
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ClienteModel.prototype, "id", void 0);
__decorate([
    (0, SearchValue_1.default)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClienteModel.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, SearchValue_1.default)(),
    __metadata("design:type", String)
], ClienteModel.prototype, "identificacion", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => InstitucionModel_1.InstitucionModel),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ClienteModel.prototype, "instituciones", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => InstitucionModel_1.InstitucionModel),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", InstitucionModel_1.InstitucionModel)
], ClienteModel.prototype, "institucionPrincipal", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => ContactoModel_1.ContactoModel),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], ClienteModel.prototype, "contactos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => EquipoModel_1.EquipoModel, equipo => equipo.responsable),
    __metadata("design:type", Array)
], ClienteModel.prototype, "equipos", void 0);
ClienteModel = __decorate([
    (0, typeorm_1.Entity)()
], ClienteModel);
exports.ClienteModel = ClienteModel;