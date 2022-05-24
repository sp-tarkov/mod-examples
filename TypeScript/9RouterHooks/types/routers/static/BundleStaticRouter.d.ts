import { BundleCallbacks } from "../../callbacks/BundleCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class BundleStaticRouter extends StaticRouter {
    private bundleCallbacks;
    constructor(bundleCallbacks: BundleCallbacks);
}
