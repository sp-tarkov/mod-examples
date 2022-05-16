import { LocationCallbacks } from "../../callbacks/LocationCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class LocationDynamicRouter extends DynamicRouter {
    private locationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
    private readonly _routes;
    getTopLevelRoute(): string;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
