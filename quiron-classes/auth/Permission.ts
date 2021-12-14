export class Permission {
    resource: string;
    action: string;
    description: string;

    constructor(resource: string, action: string, description: string) {
        this.resource = resource;
        this.action = action;
        this.description = description;
    }
}