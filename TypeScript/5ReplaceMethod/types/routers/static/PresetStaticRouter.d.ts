import { PresetBuildCallbacks } from "../../callbacks/PresetBuildCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class PresetStaticRouter extends StaticRouter {
    private presetCallbacks;
    constructor(presetCallbacks: PresetBuildCallbacks);
}
