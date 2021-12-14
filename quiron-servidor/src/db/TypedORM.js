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
exports.TypedORM = void 0;
const typeorm_1 = require("typeorm");
const models_1 = __importDefault(require("./models"));
class TypedORM {
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connectionOptions;
                if (process.env.NODE_ENV == "dev") {
                    connectionOptions = {
                        type: "postgres",
                        url: String(process.env.POSTGRES_DEV_URL),
                        entities: models_1.default,
                        synchronize: true
                    };
                }
                else {
                    connectionOptions = {
                        type: "postgres",
                        url: String(process.env.POSTGRES_URL),
                        ssl: {
                            rejectUnauthorized: false
                        },
                        entities: models_1.default,
                        synchronize: true
                    };
                }
                this.db = yield (0, typeorm_1.createConnection)(connectionOptions);
                console.log("Postgres conectado");
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.TypedORM = TypedORM;
