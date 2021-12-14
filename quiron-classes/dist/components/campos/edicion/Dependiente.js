"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dependiente = exports.CondicionDependiente = void 0;
var class_transformer_1 = require("class-transformer");
var CondicionDependiente = /** @class */ (function () {
    function CondicionDependiente(parent, parent_elemento, expected_value, operator, comparator) {
        this.parent = parent ? parent : '';
        this.parent_elemento = parent_elemento ? parent_elemento : '';
        this.expected_value = expected_value ? expected_value : '';
        this.operator = operator ? operator : '';
        this.comparator = comparator ? comparator : '';
    }
    return CondicionDependiente;
}());
exports.CondicionDependiente = CondicionDependiente;
var Dependiente = /** @class */ (function () {
    function Dependiente(activated, conditions, grupo) {
        this.activated = activated ? activated : false;
        this.conditions = conditions ? conditions : [];
        this.grupo = grupo ? grupo : '';
    }
    __decorate([
        class_transformer_1.Type(function () { return CondicionDependiente; }),
        __metadata("design:type", Array)
    ], Dependiente.prototype, "conditions", void 0);
    return Dependiente;
}());
exports.Dependiente = Dependiente;
//# sourceMappingURL=Dependiente.js.map