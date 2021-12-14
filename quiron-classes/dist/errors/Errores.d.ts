export declare enum ErrorEnum {
    "GENERICO" = 0,
    "USUARIO_NO_ENCONTRADO" = 1,
    "CREDENCIALES_INCORRECTAS" = 2,
    "CAMBIO_PASS" = 3,
    "FALTA_INFORMACION" = 4,
    "SIN_AUTORIZACION" = 5,
    "TOKEN_INVALIDO" = 6
}
export declare class ErrorPropietario extends Error {
    code: number;
    status: number;
    constructor(message: string);
}
export declare class ErrorUsuarioNoEncontrado extends ErrorPropietario {
    constructor();
}
export declare class ErrorCredencialesIncorrectas extends ErrorPropietario {
    constructor();
}
export declare class ErrorCambiarPass extends ErrorPropietario {
    constructor();
}
export declare class ErrorFaltaInformacion extends ErrorPropietario {
    constructor();
}
export declare class ErrorSinAutorizacion extends ErrorPropietario {
    constructor();
}
export declare class ErrorTokenInvalido extends ErrorPropietario {
    constructor();
}
/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export declare function resolverError(error: any): ErrorPropietario;
//# sourceMappingURL=Errores.d.ts.map