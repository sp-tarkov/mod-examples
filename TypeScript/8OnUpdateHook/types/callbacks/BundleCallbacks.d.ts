import { BundleLoader } from "../loaders/BundleLoader";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class BundleCallbacks {
    private logger;
    private httpResponse;
    private httpServer;
    private bundleLoader;
    private configServer;
    private httpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponseUtil, httpServer: IHttpServer, bundleLoader: BundleLoader, configServer: ConfigServer);
    sendBundle(sessionID: string, req: any, resp: any, body: any): any;
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
