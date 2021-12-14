"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolverError = exports.ErrorTokenInvalido = exports.ErrorSinAutorizacion = exports.ErrorFaltaInformacion = exports.ErrorCambiarPass = exports.ErrorCredencialesIncorrectas = exports.ErrorUsuarioNoEncontrado = exports.ErrorPropietario = exports.ErrorEnum = void 0;
var ErrorEnum;
(function (ErrorEnum) {
    ErrorEnum[ErrorEnum["GENERICO"] = 0] = "GENERICO";
    ErrorEnum[ErrorEnum["USUARIO_NO_ENCONTRADO"] = 1] = "USUARIO_NO_ENCONTRADO";
    ErrorEnum[ErrorEnum["CREDENCIALES_INCORRECTAS"] = 2] = "CREDENCIALES_INCORRECTAS";
    ErrorEnum[ErrorEnum["CAMBIO_PASS"] = 3] = "CAMBIO_PASS";
    ErrorEnum[ErrorEnum["FALTA_INFORMACION"] = 4] = "FALTA_INFORMACION";
    ErrorEnum[ErrorEnum["SIN_AUTORIZACION"] = 5] = "SIN_AUTORIZACION";
    ErrorEnum[ErrorEnum["TOKEN_INVALIDO"] = 6] = "TOKEN_INVALIDO";
})(ErrorEnum = exports.ErrorEnum || (exports.ErrorEnum = {}));
var ErrorPropietario = /** @class */ (function (_super) {
    __extends(ErrorPropietario, _super);
    function ErrorPropietario(message) {
        var _this = _super.call(this, message) || this;
        _this.code = ErrorEnum.GENERICO;
        _this.status = 500;
        return _this;
    }
    return ErrorPropietario;
}(Error));
exports.ErrorPropietario = ErrorPropietario;
var ErrorUsuarioNoEncontrado = /** @class */ (function (_super) {
    __extends(ErrorUsuarioNoEncontrado, _super);
    function ErrorUsuarioNoEncontrado() {
        var _this = _super.call(this, "Usuario no encontrado en la base de datos") || this;
        _this.name = "ErrorUsuarioNoEncontrado";
        _this.code = ErrorEnum.USUARIO_NO_ENCONTRADO;
        _this.status = 404;
        return _this;
    }
    return ErrorUsuarioNoEncontrado;
}(ErrorPropietario));
exports.ErrorUsuarioNoEncontrado = ErrorUsuarioNoEncontrado;
var ErrorCredencialesIncorrectas = /** @class */ (function (_super) {
    __extends(ErrorCredencialesIncorrectas, _super);
    function ErrorCredencialesIncorrectas() {
        var _this = _super.call(this, "Credenciales invalidas") || this;
        _this.name = "ErrorCredencialesIncorrectas";
        _this.code = ErrorEnum.CREDENCIALES_INCORRECTAS;
        _this.status = 403;
        return _this;
    }
    return ErrorCredencialesIncorrectas;
}(ErrorPropietario));
exports.ErrorCredencialesIncorrectas = ErrorCredencialesIncorrectas;
var ErrorCambiarPass = /** @class */ (function (_super) {
    __extends(ErrorCambiarPass, _super);
    function ErrorCambiarPass() {
        var _this = _super.call(this, "El servidor ha solicitado cambiar su contraseña") || this;
        _this.name = "ErrorCambiarContraseña";
        _this.code = ErrorEnum.CAMBIO_PASS;
        _this.status = 401;
        return _this;
    }
    return ErrorCambiarPass;
}(ErrorPropietario));
exports.ErrorCambiarPass = ErrorCambiarPass;
var ErrorFaltaInformacion = /** @class */ (function (_super) {
    __extends(ErrorFaltaInformacion, _super);
    function ErrorFaltaInformacion() {
        var _this = _super.call(this, "El servidor ha solicitado completar informacion faltante en su perfil") || this;
        _this.name = "ErrorFaltaInformacion";
        _this.code = ErrorEnum.FALTA_INFORMACION;
        _this.status = 401;
        return _this;
    }
    return ErrorFaltaInformacion;
}(ErrorPropietario));
exports.ErrorFaltaInformacion = ErrorFaltaInformacion;
var ErrorSinAutorizacion = /** @class */ (function (_super) {
    __extends(ErrorSinAutorizacion, _super);
    function ErrorSinAutorizacion() {
        var _this = _super.call(this, "El usuario no esta autorizado para realizar la accion") || this;
        _this.name = "ErrorSinAutorizacion";
        _this.code = ErrorEnum.SIN_AUTORIZACION;
        _this.status = 403;
        return _this;
    }
    return ErrorSinAutorizacion;
}(ErrorPropietario));
exports.ErrorSinAutorizacion = ErrorSinAutorizacion;
var ErrorTokenInvalido = /** @class */ (function (_super) {
    __extends(ErrorTokenInvalido, _super);
    function ErrorTokenInvalido() {
        var _this = _super.call(this, "Token invalido enviado") || this;
        _this.name = "ErrorTokenInvalido";
        _this.code = ErrorEnum.TOKEN_INVALIDO;
        _this.status = 403;
        return _this;
    }
    return ErrorTokenInvalido;
}(ErrorPropietario));
exports.ErrorTokenInvalido = ErrorTokenInvalido;
/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
function resolverError(error) {
    switch (error.code) {
        case ErrorEnum.USUARIO_NO_ENCONTRADO:
            return new ErrorUsuarioNoEncontrado();
        case ErrorEnum.CREDENCIALES_INCORRECTAS:
            return new ErrorCredencialesIncorrectas();
        case ErrorEnum.CAMBIO_PASS:
            return new ErrorCambiarPass();
        case ErrorEnum.FALTA_INFORMACION:
            return new ErrorFaltaInformacion();
        case ErrorEnum.SIN_AUTORIZACION:
            return new ErrorSinAutorizacion();
        case ErrorEnum.TOKEN_INVALIDO:
            return new ErrorTokenInvalido();
        default:
            return new ErrorPropietario(error);
    }
}
exports.resolverError = resolverError;
//# sourceMappingURL=Errores.js.map