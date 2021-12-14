import {config} from "dotenv";
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import App from "./src/App";
import loadToken from "./middleware/LoadToken";

if (<string>process.env.SERVER == undefined) {
    config();
}
const app = express();

const cors_options = {
    origin: ["http://localhost", "http://localhost:8080"],
    credentials: true
};

app.use(cors(cors_options));
app.use(cookieParser());
app.use(loadToken());
app.use(express.json({limit: 52428800}));
app.use(express.urlencoded({limit: 52428800, extended: true}));
app.get("/", (req, res) => {
    if (req.token) {
        if (process.env.NODE_ENV == "dev") {
            res.redirect(307, <string>process.env.URL_CLIENT);
        } else {
            res.sendFile(<string>process.env.CLIENT_FILE, {
                root: __dirname
            });
        }
    } else {
        res.sendFile(<string>process.env.AUTH_FILE, {
            root: __dirname
        });
    }
});
app.use("/auth", express.static("public/auth"));
app.use("/cliente", (req, res, next) => {
    if (req.token) {
        next();
    } else {
        res.sendStatus(403);
    }
}, express.static("public/cliente"));

(async () => {
    await App.start(app);
    const port = process.env.NODE_ENV == "dev" ? process.env.DEV_PORT : process.env.PORT;
    app.listen(Number(port));
    console.log(`Escuchando en *:${port}`);
})();