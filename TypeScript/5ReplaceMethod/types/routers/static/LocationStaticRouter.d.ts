import { LocationCallbacks } from "../../callbacks/LocationCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class LocationStaticRouter extends StaticRouter 
{
    private locationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
