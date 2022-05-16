import { LauncherCallbacks } from "../../callbacks/LauncherCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class LauncherStaticRouter extends StaticRouter {
    private launcherCallbacks;
    constructor(launcherCallbacks: LauncherCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): string;
}
