import { HttpResponse } from "../utils/HttpResponse";
import { OnLoad } from "../di/OnLoad";
import { DelayedModLoader } from "../loaders/DelayedModLoader";
import { ConfigServer } from "../servers/ConfigServer";
import { ILogger } from '../@types/spt/utils/ILogger';
import { IHttpServer } from '../@types/spt/server/IHttpServer';
declare class ModCallbacks extends OnLoad {
    private logger;
    private httpResponse;
    private httpServer;
    private modLoader;
    private configServer;
    private httpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponse, httpServer: IHttpServer, modLoader: DelayedModLoader, configServer: ConfigServer);
    onLoad(): void;
    getRoute(): string;
    sendBundle(sessionID: string, req: any, resp: any, body: any): void;
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
export { ModCallbacks };
