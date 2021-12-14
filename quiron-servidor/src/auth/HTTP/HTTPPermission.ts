import {Permission} from "quiron_classes/dist/auth";
import {RequestKind} from "../../binders/Binder";

export class HTTPPermission {
    permission: Permission;
    kind: RequestKind;
    endpoint: string;

    constructor(permission: Permission, kind: RequestKind, endpoint: string) {
        this.permission = permission;
        this.kind = kind;
        this.endpoint = endpoint;
    }
}