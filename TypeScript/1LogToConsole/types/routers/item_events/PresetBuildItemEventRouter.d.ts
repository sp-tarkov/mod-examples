import { IPmcData } from "../../@types/eft/common/IPmcData";
import { PresetBuildCallbacks } from "../../callbacks/PresetBuildCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class PresetBuildItemEventRouter extends ItemEventRouterDefinition {
    private presetBuildCallbacks;
    constructor(presetBuildCallbacks: PresetBuildCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
