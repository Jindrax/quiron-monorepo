import {Express} from "express";
import AutenticadorBinder from "./binders/AutenticadorBinder";
import Binder from "./binders/Binder";
import UsuariosBinder from "./binders/UsuariosBinder";
import RolesBinder from "./binders/RolesBinder";
import PlantillasBinder from "./binders/PlantillasBinder";
import CacheBinder from "./binders/CacheBinder";
import ClientesBinder from "./binders/ClientesBinder";
import InformacionBinder from "./binders/InformacionBinder";
import {TypedORM} from "./db/TypedORM";
import ContactosBinder from "./binders/ContactosBinder";
import InstitucionesBinder from "./binders/InstitucionesBinder";
import EquiposBinder from "./binders/EquiposBinder";
import PatronesBinder from "./binders/PatronesBinder";
import ServiciosBinder from "./binders/ServiciosBinder";


export default class App {
    static modules: Binder[] = [];

    static async start(express: Express) {
        await TypedORM.connect();
        this.modules.push(new AutenticadorBinder(express));
        this.modules.push(new UsuariosBinder(express));
        this.modules.push(new RolesBinder(express));
        this.modules.push(new PlantillasBinder(express));
        this.modules.push(new CacheBinder(express));
        this.modules.push(new ClientesBinder(express));
        this.modules.push(new InformacionBinder(express));
        this.modules.push(new ContactosBinder(express));
        this.modules.push(new InstitucionesBinder(express));
        this.modules.push(new EquiposBinder(express));
        this.modules.push(new PatronesBinder(express));
        this.modules.push(new ServiciosBinder(express));
    }
}