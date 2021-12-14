import {Type} from "class-transformer";

export class CondicionDependiente {
    parent: string;
    parent_elemento: string;
    expected_value: string;
    operator: string;
    comparator: string;

    constructor(parent?: string, parent_elemento?: string, expected_value?: string, operator?: string, comparator?: string) {
        this.parent = parent ? parent : '';
        this.parent_elemento = parent_elemento ? parent_elemento : '';
        this.expected_value = expected_value ? expected_value : '';
        this.operator = operator ? operator : '';
        this.comparator = comparator ? comparator : '';
    }
}

export class Dependiente {
    activated: boolean;
    @Type(()=> CondicionDependiente)
    conditions: CondicionDependiente[];
    grupo: string;

    constructor(activated?: boolean, conditions?: CondicionDependiente[], grupo?: string) {
        this.activated = activated ? activated : false;
        this.conditions = conditions ? conditions : [];
        this.grupo = grupo ? grupo : '';
    }
}