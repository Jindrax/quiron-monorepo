import {HubClass} from './HubClass';

const hub = new HubClass("servicios", "Servicios", "ion-document");
hub.addAction("crear", "Crear Plantilla", () => import("pages/Plantillas/CrearPlantilla.vue"), "Crear@Plantilla");
hub.addAction("llenar", "Llenar Plantilla", () => import("pages/Plantillas/LlenarPlantilla.vue"), "Crear@Plantilla");
hub.addAction("crerServicio", "Crear Servicio", () => import("pages/Servicios/CrearServicioPagina.vue"), "Crear@Servicio");
export default hub;
