import {Response} from "express";
import path from "path";

export function sendToAuth(res: Response) {
    res.sendFile(path.join(__dirname, "..", "..", "public", "auth", "index.html"));
}

export function sendToClient(res: Response) {
    res.sendFile(path.join(__dirname, "..", "..", "public", "cliente", "index.html"));
}

export function sendToDevClient(result: any, res: Response) {
    res.cookie("token", result, {
        path: "/",
        expires: new Date(Date.now() + 360000)
    });
    res.redirect(307, <string>process.env.URL_CLIENT);
}