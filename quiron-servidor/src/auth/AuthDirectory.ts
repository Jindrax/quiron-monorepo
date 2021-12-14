import {Permission} from "quiron_classes/dist/auth";

export class AuthDirectory {
    static directory: Record<string, Permission> = {};

    static register(permission: Permission) {
        this.directory[`${permission.action}@${permission.resource}`] = permission;
    }
}