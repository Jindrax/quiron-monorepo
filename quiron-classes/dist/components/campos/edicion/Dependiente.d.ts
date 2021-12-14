export declare class CondicionDependiente {
    parent: string;
    parent_elemento: string;
    expected_value: string;
    operator: string;
    comparator: string;
    constructor(parent?: string, parent_elemento?: string, expected_value?: string, operator?: string, comparator?: string);
}
export declare class Dependiente {
    activated: boolean;
    conditions: CondicionDependiente[];
    grupo: string;
    constructor(activated?: boolean, conditions?: CondicionDependiente[], grupo?: string);
}
//# sourceMappingURL=Dependiente.d.ts.map