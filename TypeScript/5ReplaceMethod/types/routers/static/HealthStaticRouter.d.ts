import { HealthCallbacks } from "../../callbacks/HealthCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class HealthStaticRouter extends StaticRouter 
{
    private healthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
