import { BundleCallbacks } from "../../callbacks/BundleCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class BundleStaticRouter extends StaticRouter {
    private bundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
