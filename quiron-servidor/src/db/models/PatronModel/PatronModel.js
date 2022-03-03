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
exports.PatronModel = void 0;
const CommonEntity_1 = require("../CommonEntity");
const typeorm_1 = require("typeorm");
const edicion_1 = require("@quiron/classes/dist/components/campos/edicion");
const EquipoModel_1 = require("../EquipoModel/EquipoModel");
let PatronModel = class PatronModel extends CommonEntity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], PatronModel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatronModel.prototype, "identificador", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatronModel.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PatronModel.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "jsonb" }),
    __metadata("design:type", edicion_1.CampoSeccion)
], PatronModel.prototype, "atributos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EquipoModel_1.EquipoModel, equipo => equipo.patron),
    __metadata("design:type", Array)
], PatronModel.prototype, "equipos", void 0);
PatronModel = __decorate([
    (0, typeorm_1.Entity)()
], PatronModel);
exports.PatronModel = PatronModel;
