import { HealthCallbacks } from "../../callbacks/HealthCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class HealthStaticRouter extends StaticRouter {
    private healthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
}
