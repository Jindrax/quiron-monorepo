"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Binder_1 = __importDefault(require("./Binder"));
class ServiciosBinder extends Binder_1.default {
    constructor(server) {
        super(server);
    }
}
exports.default = ServiciosBinder;
