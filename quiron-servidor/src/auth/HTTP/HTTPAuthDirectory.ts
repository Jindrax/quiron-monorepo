import {Permission} from "quiron_classes/dist/auth";
import {HTTPPermission} from "./HTTPPermission";
import {AuthDirectory} from "../AuthDirectory";
import {AuthDict} from "../index";
import {RequestKind} from "../../binders/Binder";

export class HTTPAuthDirectory {
    static directory: Record<string, Record<string, Permission>> = {};

    static register(permission: HTTPPermission) {
        if (!this.directory[permission.endpoint]) {
            this.directory[permission.endpoint] = {};
        }
        if (!this.directory[permission.endpoint][permission.kind]) {
            this.directory[permission.endpoint][permission.kind] = permission.permission;
        }
        AuthDirectory.register(permission.permission);
    }

    static verifyAuth(endpoint: string, kind: RequestKind, dict: AuthDict): boolean {
        const permission = this.directory[endpoint][kind];
        return permission == dict[`${permission.action}@${permission.resource}`];
    }
}