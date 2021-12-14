import Binder, {RequestKind} from "./Binder";
import {Express} from "express";
import Test from "../modules/Test";

export default class TestBinder extends Binder {
    constructor(server: Express) {
        super(server);
        this.registerEndPoint(RequestKind.GET, "/usuario", {processor: Test.helloWorld});
    }
}