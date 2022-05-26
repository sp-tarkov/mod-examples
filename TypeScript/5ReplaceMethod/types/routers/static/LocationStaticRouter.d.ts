import { LocationCallbacks } from "../../callbacks/LocationCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class LocationStaticRouter extends StaticRouter {
    private locationCallbacks;
    constructor(locationCallbacks: LocationCallbacks);
}
