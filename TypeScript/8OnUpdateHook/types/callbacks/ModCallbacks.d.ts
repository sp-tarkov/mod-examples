import { OnLoad } from "../di/OnLoad";
import { DelayedModLoader } from "../loaders/DelayedModLoader";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
declare class ModCallbacks extends OnLoad {
    private logger;
    private httpResponse;
    private httpServer;
    private modLoader;
    private configServer;
    private httpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponseUtil, httpServer: IHttpServer, modLoader: DelayedModLoader, configServer: ConfigServer);
    onLoad(): void;
    getRoute(): string;
    sendBundle(sessionID: string, req: any, resp: any, body: any): void;
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
export { ModCallbacks };
