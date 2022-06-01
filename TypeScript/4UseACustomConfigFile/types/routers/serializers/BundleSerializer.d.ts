import { Serializer } from "../../di/Serializer";
import { BundleLoader } from "../../loaders/BundleLoader";
import { IHttpServer } from "../../models/spt/server/IHttpServer";
import { ILogger } from "../../models/spt/utils/ILogger";
export declare class BundleSerializer extends Serializer {
    private logger;
    private bundleLoader;
    constructor(logger: ILogger, bundleLoader: BundleLoader);
    serialize(sessionID: string, req: any, resp: any, body: any, httpServer: IHttpServer): void;
    canHandle(route: string): boolean;
}
