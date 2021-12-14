import {Connection, ConnectionOptions, createConnection} from "typeorm";
import entities from "./models";

export class TypedORM {
    static db: Connection;

    static async connect() {
        try {
            let connectionOptions: ConnectionOptions;
            if (process.env.NODE_ENV == "dev") {
                connectionOptions = {
                    type: "postgres",
                    url: String(process.env.POSTGRES_DEV_URL),
                    entities: entities,
                    synchronize: true
                };
            } else {
                connectionOptions = {
                    type: "postgres",
                    url: String(process.env.POSTGRES_URL),
                    ssl: {
                        rejectUnauthorized: false
                    },
                    entities: entities,
                    synchronize: true
                };
            }
            this.db = await createConnection(connectionOptions);
            console.log("Postgres conectado");
        } catch (e) {
            console.log(e);
        }
    }
}