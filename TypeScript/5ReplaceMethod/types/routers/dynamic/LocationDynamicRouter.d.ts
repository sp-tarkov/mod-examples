import { LocationCallbacks } from "../../callbacks/LocationCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class LocationDynamicRouter extends DynamicRouter {
    private locationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
    getTopLevelRoute(): string;
}
