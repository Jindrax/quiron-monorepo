export enum ErrorEnum {
    "GENERICO",
    "USUARIO_NO_ENCONTRADO",
    "CREDENCIALES_INCORRECTAS",
    "CAMBIO_PASS",
    "FALTA_INFORMACION",
    "SIN_AUTORIZACION",
    "TOKEN_INVALIDO"
}

export class ErrorPropietario extends Error {
    code: number;
    status: number;

    constructor(message: string) {
        super(message);
        this.code = ErrorEnum.GENERICO;
        this.status = 500;
    }
}

export class ErrorUsuarioNoEncontrado extends ErrorPropietario {
    constructor() {
        super("Usuario no encontrado en la base de datos");
        this.name = "ErrorUsuarioNoEncontrado";
        this.code = ErrorEnum.USUARIO_NO_ENCONTRADO;
        this.status = 404;
    }
}

export class ErrorCredencialesIncorrectas extends ErrorPropietario {
    constructor() {
        super("Credenciales invalidas");
        this.name = "ErrorCredencialesIncorrectas";
        this.code = ErrorEnum.CREDENCIALES_INCORRECTAS;
        this.status = 403;
    }
}

export class ErrorCambiarPass extends ErrorPropietario {
    constructor() {
        super("El servidor ha solicitado cambiar su contraseña");
        this.name = "ErrorCambiarContraseña";
        this.code = ErrorEnum.CAMBIO_PASS;
        this.status = 401;
    }
}

export class ErrorFaltaInformacion extends ErrorPropietario {
    constructor() {
        super("El servidor ha solicitado completar informacion faltante en su perfil");
        this.name = "ErrorFaltaInformacion";
        this.code = ErrorEnum.FALTA_INFORMACION;
        this.status = 401;
    }
}

export class ErrorSinAutorizacion extends ErrorPropietario {
    constructor() {
        super("El usuario no esta autorizado para realizar la accion");
        this.name = "ErrorSinAutorizacion";
        this.code = ErrorEnum.SIN_AUTORIZACION;
        this.status = 403;
    }
}

export class ErrorTokenInvalido extends ErrorPropietario {
    constructor() {
        super("Token invalido enviado");
        this.name = "ErrorTokenInvalido";
        this.code = ErrorEnum.TOKEN_INVALIDO;
        this.status = 403;
    }
}

/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export function resolverError(error: any) {
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