import { WeatherCallbacks } from "../../callbacks/WeatherCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class WeatherStaticRouter extends StaticRouter {
    private weatherCallbacks;
    constructor(weatherCallbacks: WeatherCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
