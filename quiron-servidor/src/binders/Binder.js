"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestKind = void 0;
const HTTPPermission_1 = require("../auth/HTTP/HTTPPermission");
const HTTPAuthDirectory_1 = require("../auth/HTTP/HTTPAuthDirectory");
var RequestKind;
(function (RequestKind) {
    RequestKind["GET"] = "GET";
    RequestKind["POST"] = "POST";
    RequestKind["PUT"] = "PUT";
    RequestKind["PATCH"] = "PATCH";
    RequestKind["DELETE"] = "DELETE";
})(RequestKind = exports.RequestKind || (exports.RequestKind = {}));
class Binder {
    constructor(server) {
        this.server = null;
        this.module = "";
        this.server = server;
        let name = this.constructor.name;
        this.module = name.slice(0, name.length - 6);
    }
    static resolveCall(handler, req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield handler.processor(Object.assign(Object.assign(Object.assign(Object.assign({}, req.body), req.query), req.params), { token: req.token ? req.token : undefined, res: res }));
                if (handler.postProcessor) {
                    const continueRequest = handler.postProcessor(response, req, res);
                    if (continueRequest) {
                        return {
                            response: response,
                            status: 200
                        };
                    }
                    else {
                        return {
                            response: response,
                            status: -200
                        };
                    }
                }
                return {
                    response: response,
                    status: 200
                };
            }
            catch (e) {
                console.log(e);
                return {
                    response: {
                        error: true,
                        message: e.message,
                        code: e.code ? e.code : 500
                    },
                    status: e.status
                };
            }
        });
    }
    resolveVerb(kind, resource, middle, handler) {
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
    registerEndPoint(kind, resource, handler, permission) {
        if (this.server) {
            try {
                if (permission) {
                    let httpPermission = new HTTPPermission_1.HTTPPermission(permission, kind, resource);
                    HTTPAuthDirectory_1.HTTPAuthDirectory.register(httpPermission);
                    this.resolveVerb(kind, resource, this.authMiddle(httpPermission), this.createHandler(handler));
                }
                else {
                    this.resolveVerb(kind, resource, this.authMiddle(), this.createHandler(handler));
                }
            }
            catch (e) {
                throw e;
            }
        }
    }
    authMiddle(permission) {
        return (req, res, next) => {
            if (permission) {
                if (req.token) {
                    if (req.token.permisos) {
                        if (HTTPAuthDirectory_1.HTTPAuthDirectory.verifyAuth(permission.endpoint, permission.kind, req.token.permisos)) {
                            next();
                        }
                        else {
                            next();
                            // res.status(403).send();
                        }
                    }
                }
                else {
                    res.redirect(307, process.env.URL_AUTH);
                }
            }
            else {
                next();
            }
        };
    }
    createHandler(handler) {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield Binder.resolveCall(handler, req, res);
            if (response.status != -200) {
                res.status(response.status).json(response.response);
            }
        });
    }
}
exports.default = Binder;
