import { OnLoad } from "../di/OnLoad";
import { HttpServer } from "../servers/HttpServer";
export declare class HttpCallbacks extends OnLoad {
    protected httpServer: HttpServer;
    constructor(httpServer: HttpServer);
    onLoad(): void;
    getRoute(): string;
    getImage(): string;
}
