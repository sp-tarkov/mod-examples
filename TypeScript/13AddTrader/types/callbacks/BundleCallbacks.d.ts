import { BundleLoader } from "../loaders/BundleLoader";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class BundleCallbacks {
    protected logger: ILogger;
    protected httpResponse: HttpResponseUtil;
    protected httpServer: IHttpServer;
    protected bundleLoader: BundleLoader;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponseUtil, httpServer: IHttpServer, bundleLoader: BundleLoader, configServer: ConfigServer);
    sendBundle(sessionID: string, req: any, resp: any, body: any): any;
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
