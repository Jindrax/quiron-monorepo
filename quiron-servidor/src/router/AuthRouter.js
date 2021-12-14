"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToDevClient = exports.sendToClient = exports.sendToAuth = void 0;
const path_1 = __importDefault(require("path"));
function sendToAuth(res) {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "public", "auth", "index.html"));
}
exports.sendToAuth = sendToAuth;
function sendToClient(res) {
    res.sendFile(path_1.default.join(__dirname, "..", "..", "public", "cliente", "index.html"));
}
exports.sendToClient = sendToClient;
function sendToDevClient(result, res) {
    res.cookie("token", result, {
        path: "/",
        expires: new Date(Date.now() + 360000)
    });
    res.redirect(307, process.env.URL_CLIENT);
}
exports.sendToDevClient = sendToDevClient;
