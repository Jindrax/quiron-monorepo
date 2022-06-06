"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutenticadorBinder_1 = __importDefault(require("./binders/AutenticadorBinder"));
const UsuariosBinder_1 = __importDefault(require("./binders/UsuariosBinder"));
const RolesBinder_1 = __importDefault(require("./binders/RolesBinder"));
const PlantillasBinder_1 = __importDefault(require("./binders/PlantillasBinder"));
const CacheBinder_1 = __importDefault(require("./binders/CacheBinder"));
const ClientesBinder_1 = __importDefault(require("./binders/ClientesBinder"));
const InformacionBinder_1 = __importDefault(require("./binders/InformacionBinder"));
const TypedORM_1 = require("./db/TypedORM");
const ContactosBinder_1 = __importDefault(require("./binders/ContactosBinder"));
const InstitucionesBinder_1 = __importDefault(require("./binders/InstitucionesBinder"));
const EquiposBinder_1 = __importDefault(require("./binders/EquiposBinder"));
const ReferenciaEquipoBinder_1 = __importDefault(require("./binders/ReferenciaEquipoBinder"));
const ServiciosBinder_1 = __importDefault(require("./binders/ServiciosBinder"));
const OTsBinder_1 = __importDefault(require("./binders/OTsBinder"));
const FormulariosBinder_1 = __importDefault(require("./binders/FormulariosBinder"));
class App {
    static start(express) {
        return __awaiter(this, void 0, void 0, function* () {
            yield TypedORM_1.TypedORM.connect();
            this.modules.push(new AutenticadorBinder_1.default(express));
            this.modules.push(new UsuariosBinder_1.default(express));
            this.modules.push(new RolesBinder_1.default(express));
            this.modules.push(new PlantillasBinder_1.default(express));
            this.modules.push(new CacheBinder_1.default(express));
            this.modules.push(new ClientesBinder_1.default(express));
            this.modules.push(new InformacionBinder_1.default(express));
            this.modules.push(new ContactosBinder_1.default(express));
            this.modules.push(new InstitucionesBinder_1.default(express));
            this.modules.push(new EquiposBinder_1.default(express));
            this.modules.push(new ReferenciaEquipoBinder_1.default(express));
            this.modules.push(new ServiciosBinder_1.default(express));
            this.modules.push(new OTsBinder_1.default(express));
            this.modules.push(new FormulariosBinder_1.default(express));
        });
    }
}
exports.default = App;
App.modules = [];
