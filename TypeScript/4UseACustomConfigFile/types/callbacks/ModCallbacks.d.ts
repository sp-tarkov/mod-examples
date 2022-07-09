import { OnLoad } from "../di/OnLoad";
import { PostAkiModLoader } from "../loaders/PostAkiModLoader";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
declare class ModCallbacks extends OnLoad {
    protected logger: ILogger;
    protected httpResponse: HttpResponseUtil;
    protected httpServer: IHttpServer;
    protected postAkiModLoader: PostAkiModLoader;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponseUtil, httpServer: IHttpServer, postAkiModLoader: PostAkiModLoader, configServer: ConfigServer);
    onLoad(): void;
    getRoute(): string;
    sendBundle(sessionID: string, req: any, resp: any, body: any): void;
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
export { ModCallbacks };
