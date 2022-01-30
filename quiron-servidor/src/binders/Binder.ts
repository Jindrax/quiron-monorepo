import {Express, Request, RequestHandler, Response} from 'express';
import {Permission} from "@quiron/classes/dist/auth";
import {HTTPPermission} from "../auth/HTTP/HTTPPermission";
import {HTTPAuthDirectory} from "../auth/HTTP/HTTPAuthDirectory";

export enum RequestKind {
    "GET" = "GET",
    "POST" = "POST",
    "PUT" = "PUT",
    "PATCH" = "PATCH",
    "DELETE" = "DELETE",

}

export interface Handler<T> {
    processor: {
        (args: any): T
    },
    postProcessor?: {
        (result: T, req: Request, res: Response): boolean
    }
}

interface resolvedCalled {
    response: any,
    status: number
}

export default class Binder {
    server: Express | null = null;
    module: string = "";

    constructor(server: Express) {
        this.server = server;
        let name = this.constructor.name;
        this.module = name.slice(0, name.length - 6);
    }

    private static async resolveCall(handler: Handler<any>, req: Request, res: Response): Promise<resolvedCalled> {
        try {
            const response = await handler.processor({
                ...req.body,
                ...req.query,
                ...req.params,
                token: req.token ? req.token : undefined,
                res: res
            });
            if (handler.postProcessor) {
                const continueRequest: boolean = handler.postProcessor(response, req, res);
                if (continueRequest) {
                    return {
                        response: response,
                        status: 200
                    };
                } else {
                    return {
                        response: response,
                        status: -200
                    }
                }
            }
            return {
                response: response,
                status: 200
            };
        } catch (e:any) {
            console.log(e);
            return {
                response: {
                    error: true,
                    message: e.message,
                    code: e.code ? e.code : 500
                },
                status: e.status
            }
        }
    }

    protected resolveVerb(kind: RequestKind, resource: string, middle: RequestHandler, handler: RequestHandler) {
        if (this.server) {
            switch (kind) {
                case RequestKind.GET:
                    this.server.get(resource, middle, handler);
                    break;
                case RequestKind.POST:
                    this.server.post(resource, middle, handler);
                    break;
                case RequestKind.PUT:
                    this.server.put(resource, middle, handler);
                    break;
                case RequestKind.PATCH:
                    this.server.patch(resource, middle, handler);
                    break;
                case RequestKind.DELETE:
                    this.server.delete(resource, middle, handler);
                    break;
            }
        }
        return () => {
        };
    }

    protected registerEndPoint(kind: RequestKind, resource: string, handler: Handler<any>, permission?: Permission) {
        if (this.server) {
            try {
                if (permission) {
                    let httpPermission = new HTTPPermission(permission, kind, resource);
                    HTTPAuthDirectory.register(httpPermission);
                    this.resolveVerb(kind, resource, this.authMiddle(httpPermission), this.createHandler(handler));
                } else {
                    this.resolveVerb(kind, resource, this.authMiddle(), this.createHandler(handler));
                }
            } catch (e) {
                throw e;
            }
        }
    }

    protected authMiddle(permission?: HTTPPermission): RequestHandler {
        return (req, res, next) => {
            if (permission) {
                if (req.token) {
                    if (req.token.permisos) {
                        if (HTTPAuthDirectory.verifyAuth(permission.endpoint, permission.kind, req.token.permisos)) {
                            next();
                        } else {
                            next();
                            // res.status(403).send();
                        }
                    }
                } else {
                    res.redirect(307, <string>process.env.URL_AUTH);
                }
            } else {
                next();
            }
        }
    }

    private createHandler(handler: Handler<any>): RequestHandler {
        return async (req, res) => {
            const response = await Binder.resolveCall(handler, req, res);
            if (response.status != -200) {
                res.status(response.status).json(response.response);
            }
        }
    }

}