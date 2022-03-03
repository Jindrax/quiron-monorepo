import {HubClass} from './HubClass';

const hub = new HubClass("equipos", "Equipos", "ion-laptop");
hub.addAction("crearPatron", "Añadir Patrones", () => import("pages/Equipos/CrearPatronPagina.vue"), "Crear@Equipo");
hub.addAction("crearEquipo", "Añadir Equipo", () => import("pages/Equipos/CrearEquipoPagina.vue"), "Crear@Equipo");

export default hub;
