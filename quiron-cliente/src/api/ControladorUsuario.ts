import Controller from './Controller';
import { resolverError } from './Errores';
import { Cookies } from 'quasar';
export default class ControladorUsuario {
  public _id: string;
  public identificacion: string;
  public nombres: string;
  public apellidos: string;
  public password: string;
  public cambiar_password: boolean;
  public no_informacion: boolean;
  public permisos: any;
  public firma: string;
  /**
   * Constructor de la clase
   * @constructs Usuario
   * @param {String} _id Id en la base de datos
   * @param {String} identificacion Identificacion unica del usuario
   * @param {String} nombres Nombres del usuario
   * @param {String} apellidos Apellidos del usuario
   * @param {String} password Contraseña del usuario, encriptada
   * @param {Boolean} cambiar_password Bandera para la solicitud de cambiar la contraseña
   * @param {Boolean} no_informacion Bandera que indica que el usuario no ha llenado completamente su informacion
   * @param {Object} permisos Objeto con el que se manejan los permisos del usuario
   * @param {String} firma Imagen de la firma del usuario en base64
   */
  public constructor(
    _id: string,
    identificacion: string,
    nombres: string,
    apellidos: string,
    password: string,
    cambiar_password: boolean,
    no_informacion: boolean,
    permisos: any,
    firma: string
  ) {
    this._id = _id;
    this.identificacion = identificacion;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.password = password;
    this.cambiar_password = cambiar_password;
    this.no_informacion = no_informacion;
    this.permisos = permisos;
    this.firma = firma;
  }

  /**
   * Funcion que convierte registros de la base de datos en Usuarios
   * @param {Object|Object[]} usuario Usuario o usuarios de la base de datos que seran convertidos en objetos Usuario
   * @returns {ControladorUsuario|ControladorUsuario[]} Usuario o Usuarios ya convertidos en Usuario
   */
  static formatearUsuario(usuario) {
    if (usuario instanceof Array) {
      let usuarios = [];
      usuario.forEach(u => {
        usuarios.push(
          new ControladorUsuario(
            u._id,
            u.identificacion,
            u.nombres,
            u.apellidos,
            u.password,
            u.cambiar_password,
            u.no_informacion,
            u.permisos,
            u.firma
          )
        );
      });
      return usuarios;
    } else {
      return new ControladorUsuario(
        usuario._id,
        usuario.identificacion,
        usuario.nombre,
        usuario.apellidos,
        usuario.password,
        usuario.cambiar_password,
        usuario.no_informacion,
        usuario.permisos,
        usuario.firma
      );
    }
  }
  static async iniciarSesion({ identificacion, password }) {
    try {
      // let usuario = await Controlador.rpc(
      //   'usuario.iniciarSesion',
      //   [identificacion, password]
      // );
      // console.log(usuario);
      // Cookies.set('nombreUsuario', `${usuario.nombres} ${usuario.apellidos}`);
      // Cookies.set('usuarioID', usuario._id);
      // Controlador.lanzarEvento('autenticado');
      // return usuario;
    } catch (error) {
      resolverError(error);
    }
  }
  static cerrarSesion() {
    return new Promise(async (resolver, rechazar) => {
      try {
        // await Controlador.rpc('usuario.cerrarSesion');
        Cookies.remove('nombreUsuario');
        // Controlador.lanzarEvento('desautenticado');
        resolver(true);
      } catch (error) {
        rechazar(resolverError(error));
      }
    });
  }
  static cambiarContraseña({ identificacion, password }) {
    return new Promise(async (resolver, rechazar) => {
      try {
        // let respuesta = await Controlador.rpc(
        //   'usuario.cambiarContraseña',
        //   [identificacion, password]
        // );
        // resolver(respuesta);
      } catch (error) {
        rechazar(resolverError(error));
      }
    });
  }
  static nuevoUsuario({ identificacion, password, cambios }) {
    return new Promise(async (resolver, rechazar) => {
      try {
        // let respuesta = await Controlador.rpc(
        //   'usuario.actualizarInformacion',
        //   [identificacion, password, cambios]
        // );
        // resolver(respuesta);
      } catch (error) {
        rechazar(resolverError(error));
      }
    });
  }
}
