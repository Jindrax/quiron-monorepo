"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDirectory = void 0;
class AuthDirectory {
    static register(permission) {
        this.directory[`${permission.action}@${permission.resource}`] = permission;
    }
}
exports.AuthDirectory = AuthDirectory;
AuthDirectory.directory = {};
