import { LauncherCallbacks } from "../../callbacks/LauncherCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class LauncherStaticRouter extends StaticRouter {
    private launcherCallbacks;
    constructor(launcherCallbacks: LauncherCallbacks);
}
