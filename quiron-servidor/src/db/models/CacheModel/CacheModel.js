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
exports.CacheModel = void 0;
const typeorm_1 = require("typeorm");
const UsuarioModel_1 = require("../UsuarioModel");
let CacheModel = class CacheModel extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CacheModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => UsuarioModel_1.UsuarioModel),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", UsuarioModel_1.UsuarioModel)
], CacheModel.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CacheModel.prototype, "usuarioId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "jsonb"
    }),
    __metadata("design:type", Array)
], CacheModel.prototype, "plantillas", void 0);
CacheModel = __decorate([
    (0, typeorm_1.Entity)()
], CacheModel);
exports.CacheModel = CacheModel;
