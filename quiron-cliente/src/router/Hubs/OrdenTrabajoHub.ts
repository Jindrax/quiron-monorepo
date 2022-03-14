import {HubClass} from './HubClass';

const hub = new HubClass("ots", "Orden de trabajo", "ion-briefcase");
hub.addAction("crearOT", "Crear Orden de trabajo", () => import("pages/OrdenesTrabajos/CrearOTSPagina.vue"), "Crear@Equipo");
hub.addAction("llenarOT", "Llenar Orden de trabajo", () => import("pages/OrdenesTrabajos/LlenarOTSPagina.vue"), "Crear@Equipo");
export default hub;
