import {HubClass} from './HubClass';

const hub = new HubClass("servicios", "Servicios", "ion-people");
hub.addAction("crear", "Crear", () => import("pages/Usuarios/CrearUsuarioPagina.vue"));
export default hub;
