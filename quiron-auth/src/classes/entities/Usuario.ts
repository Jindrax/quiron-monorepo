import Rol from "./Rol";

export default class Usuario{
    identificacion: string = "";
    nombres: string = "";
    apellidos: string = "";
    password: string = "";
    cambiar_password: boolean = false;
    no_informacion: boolean = false;
    roles: Rol[] = [];
    firma: string = "";
}