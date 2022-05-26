import { WeatherCallbacks } from "../../callbacks/WeatherCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class WeatherStaticRouter extends StaticRouter {
    private weatherCallbacks;
    constructor(weatherCallbacks: WeatherCallbacks);
}
