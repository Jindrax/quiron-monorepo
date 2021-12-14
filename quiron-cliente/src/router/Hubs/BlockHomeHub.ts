import {HubClass} from './HubClass';

const hub = new HubClass("home", "BlockHome", "ion-home");
hub.addAction("notificaciones", "Notificaciones", () => import("pages/BlockHome/NotificacionesHome.vue"));
export default hub;
