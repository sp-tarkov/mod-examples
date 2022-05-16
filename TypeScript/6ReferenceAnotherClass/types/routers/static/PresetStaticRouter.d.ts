import { PresetBuildCallbacks } from "../../callbacks/PresetBuildCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class PresetStaticRouter extends StaticRouter {
    private presetCallbacks;
    constructor(presetCallbacks: PresetBuildCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
