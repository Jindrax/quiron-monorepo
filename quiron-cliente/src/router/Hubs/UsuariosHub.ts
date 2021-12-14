import {HubClass} from './HubClass';

const hub = new HubClass("usuarios", "Usuarios", "ion-people");
hub.addAction("crear", "Crear", () => import("pages/Usuarios/CrearUsuarioPagina.vue"), "Crear@Usuario");
hub.addAction("crearRol", "Crear Rol", () => import("pages/Usuarios/CrearRolPagina.vue"), "Crear@Rol");
export default hub;
