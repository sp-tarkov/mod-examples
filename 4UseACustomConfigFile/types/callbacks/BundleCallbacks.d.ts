import { BundleLoader } from "../loaders/BundleLoader";
import { ConfigServer } from "../servers/ConfigServer";
import { IHttpConfig } from "../@types/spt/config/IHttpConfig";
import { HttpResponse } from "../utils/HttpResponse";
import { ILogger } from "../@types/spt/utils/ILogger";
import { IHttpServer } from "../@types/spt/server/IHttpServer";
export declare class BundleCallbacks {
    private logger;
    private httpResponse;
    private httpServer;
    private bundleLoader;
    private configServer;
    httpConfig: IHttpConfig;
    constructor(logger: ILogger, httpResponse: HttpResponse, httpServer: IHttpServer, bundleLoader: BundleLoader, configServer: ConfigServer);
    sendBundle(sessionID: string, req: any, resp: any, body: any): any;
    getBundles(url: string, info: any, sessionID: string): string;
    getBundle(url: string, info: any, sessionID: string): string;
}
