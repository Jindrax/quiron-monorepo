/* eslint-disable @typescript-eslint/class-name-casing */
export class ErrorGenerico extends Error {
  public code = 0;

  public constructor(error) {
    super(error.message);
    this.name = error.name;
    this.stack = error.stack;
  }
}

export class ErrorUsuarioNoEncontrado extends Error {
  public code = 1;

  public constructor() {
    super('Usuario no encontrado en la base de datos');
    this.name = 'ErrorUsuarioNoEncontrado';
  }
}

export class ErrorCredencialesIncorrectas extends Error {
  public code = 2;

  public constructor() {
    super('Credenciales invalidas');
    this.name = 'ErrorCredencialesIncorrectas';
  }
}

export class ErrorCambiarContra extends Error {
  public code = 3;

  public constructor() {
    super('El servidor ha solicitado cambiar su contraseña');
    this.name = 'ErrorCambiarContraseña';
  }
}

export class ErrorFaltaInformacion extends Error {
  public code = 4;

  public constructor() {
    super(
      'El servidor ha solicitado completar informacion faltante en su perfil'
    );
    this.name = 'ErrorFaltaInformacion';
  }
}

export class ErrorSinAutorizacion extends Error {
  public code = 5;

  public constructor() {
    super('El usuario no esta autorizado para realizar la accion');
    this.name = 'ErrorSinAutorizacion';
  }
}

interface ErrorServidor {
  code: number
}

/**
 * Funcion que toma un error desde el servidor y lo convierte en un Objeto con clase
 * @param {Object} error Error que llega desde el servidor
 */
export function resolverError(error: ErrorServidor): Error {
  switch (error.code) {
    case 1:
      return new ErrorUsuarioNoEncontrado();
    case 2:
      return new ErrorCredencialesIncorrectas();
    case 3:
      return new ErrorCambiarContra();
    case 4:
      return new ErrorFaltaInformacion();
    case 5:
      return new ErrorSinAutorizacion();
    default:
      return new ErrorGenerico(error);
  }
}
