"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RolModel_1 = require("./RolModel");
const UsuarioModel_1 = require("./UsuarioModel");
const PlantillaModel_1 = require("./PlantillaModel");
const CacheModel_1 = require("./CacheModel");
const ClienteModel_1 = require("./ClienteModel");
const ContactoModel_1 = require("./ContactoModel");
const EquipoModel_1 = require("./EquipoModel/EquipoModel");
const FormularioModel_1 = require("./FormularioModel/FormularioModel");
const OTModel_1 = require("./OTModel");
const ServicioModel_1 = require("./ServicioModel/ServicioModel");
const FormularioTraceModel_1 = require("./Traces/FormularioTraceModel");
const Traces_1 = require("./Traces");
const InstitucionModel_1 = require("./InstitucionModel");
const EquipoAtributoModel_1 = require("./EquipoModel/EquipoAtributoModel");
const PatronModel_1 = require("./PatronModel");
const entities = [
    UsuarioModel_1.UsuarioModel,
    RolModel_1.RolModel,
    PlantillaModel_1.PlantillaModel,
    Traces_1.PlantillaTraceModel,
    CacheModel_1.CacheModel,
    ClienteModel_1.ClienteModel,
    InstitucionModel_1.InstitucionModel,
    ContactoModel_1.ContactoModel,
    EquipoModel_1.EquipoModel,
    FormularioModel_1.FormularioModel,
    OTModel_1.OTModel,
    ServicioModel_1.ServicioModel,
    FormularioTraceModel_1.FormularioTraceModel,
    Traces_1.OTTraceModel,
    EquipoAtributoModel_1.EquipoAtributoModel,
    InstitucionModel_1.InstitucionClienteContactoModel,
    PatronModel_1.PatronModel
];
exports.default = entities;
