import { BundleCallbacks } from "../../callbacks/BundleCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class BundleDynamicRouter extends DynamicRouter {
    private bundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
}
