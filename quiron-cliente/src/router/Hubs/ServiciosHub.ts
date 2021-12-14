import {HubClass} from './HubClass';

const hub = new HubClass("servicios", "Servicios", "ion-people");
hub.addAction("crear", "Crear", () => import("pages/Usuarios/CrearUsuarioPagina.vue"));
hub.addAction("crearRol", "Crear Rol", () => import("pages/Usuarios/CrearRolPagina.vue"));
export default hub;
