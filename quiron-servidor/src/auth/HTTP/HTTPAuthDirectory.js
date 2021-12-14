"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPAuthDirectory = void 0;
const AuthDirectory_1 = require("../AuthDirectory");
class HTTPAuthDirectory {
    static register(permission) {
        if (!this.directory[permission.endpoint]) {
            this.directory[permission.endpoint] = {};
        }
        if (!this.directory[permission.endpoint][permission.kind]) {
            this.directory[permission.endpoint][permission.kind] = permission.permission;
        }
        AuthDirectory_1.AuthDirectory.register(permission.permission);
    }
    static verifyAuth(endpoint, kind, dict) {
        const permission = this.directory[endpoint][kind];
        return permission == dict[`${permission.action}@${permission.resource}`];
    }
}
exports.HTTPAuthDirectory = HTTPAuthDirectory;
HTTPAuthDirectory.directory = {};
