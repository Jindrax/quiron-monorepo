import {HubClass} from './HubClass';

const hub = new HubClass("equipos", "Equipos", "ion-laptop");
hub.addAction("crearPatron", "Añadir Referencia Equipo", () => import("pages/Equipos/CrearReferenciaEquipoPagina.vue"), "Crear@Equipo");
hub.addAction("crearEquipo", "Añadir Equipo", () => import("pages/Equipos/CrearEquipoPagina.vue"), "Crear@Equipo");

export default hub;
