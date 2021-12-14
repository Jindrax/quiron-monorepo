"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoEquipo = void 0;
var TipoEquipo = /** @class */ (function () {
    function TipoEquipo(_a) {
        var id = _a.id, identificador = _a.identificador, atributos = _a.atributos;
        this.id = id;
        this.identificador = identificador ? identificador : "";
        this.atributos = atributos ? atributos : [];
    }
    return TipoEquipo;
}());
exports.TipoEquipo = TipoEquipo;
//# sourceMappingURL=TipoEquipo.js.map