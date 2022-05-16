import { IHttpServer } from "../@types/spt/server/IHttpServer";
import { OnLoad } from "../di/OnLoad";
export declare class HttpCallbacks extends OnLoad {
    private httpServer;
    constructor(httpServer: IHttpServer);
    onLoad(): void;
    getRoute(): string;
    getImage(): string;
}
