import {HubClass} from './HubClass';

const hub = new HubClass("clientes", "Clientes", "ion-business");
hub.addAction("contacto", "Añadir Contacto", () => import("pages/Clientes/CrearContactoPagina.vue"), "Crear@Contacto");
hub.addAction("sucursal", "Añadir Institucion", () => import("pages/Clientes/CrearInstitucionPagina.vue"), "Crear@Institucion");
hub.addAction("crear", "Crear Cliente", () => import("pages/Clientes/CrearClientePagina.vue"), "Crear@Cliente");
hub.addAction("institucionACliente", "Asociar Institucion a Cliente", () => import("pages/Clientes/AsociarInstitucionAClientePagina.vue"), "Asociar@Institucion");
export default hub;
