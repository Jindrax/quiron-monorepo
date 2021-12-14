import {HubClass} from './HubClass';

const hub = new HubClass("equipos", "Equipos", "ion-laptop");
hub.addAction("crear", "Añadir Equipo", () => import("pages/Equipos/CrearEquipo.vue"), "Crear@Equipo");

export default hub;
