import { BundleCallbacks } from "../../callbacks/BundleCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class BundleDynamicRouter extends DynamicRouter 
{
    private bundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
