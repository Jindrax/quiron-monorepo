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
Object.defineProperty(exports, "__esModule", { value: true });
const ContactoModel_1 = require("../db/models/ContactoModel");
const CRUDEntity_1 = require("../db/models/CRUDEntity");
class Contactos {
    static crear({ contacto }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Contactos.repo.createEntity(contacto);
        });
    }
    static buscar({ filtro }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield Contactos.repo.retrieveEntity(JSON.parse(filtro), ["instituciones"]);
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = Contactos;
Contactos.repo = new CRUDEntity_1.CRUDEntity(ContactoModel_1.ContactoModel);
