import { OnLoad } from "../di/OnLoad";
import { IHttpServer } from "../models/spt/server/IHttpServer";
export declare class HttpCallbacks extends OnLoad {
    private httpServer;
    constructor(httpServer: IHttpServer);
    onLoad(): void;
    getRoute(): string;
    getImage(): string;
}
