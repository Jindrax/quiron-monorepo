"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPPermission = void 0;
class HTTPPermission {
    constructor(permission, kind, endpoint) {
        this.permission = permission;
        this.kind = kind;
        this.endpoint = endpoint;
    }
}
exports.HTTPPermission = HTTPPermission;
