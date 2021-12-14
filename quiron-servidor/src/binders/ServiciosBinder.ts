import Binder from "./Binder";
import {Express} from "express";

export default class ServiciosBinder extends Binder{

    constructor(server: Express) {
        super(server);
    }
}