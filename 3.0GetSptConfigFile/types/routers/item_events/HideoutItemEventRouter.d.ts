import { IPmcData } from "../../@types/eft/common/IPmcData";
import { HideoutCallbacks } from "../../callbacks/HideoutCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class HideoutItemEventRouter extends ItemEventRouterDefinition {
    private hideoutCallbacks;
    constructor(hideoutCallbacks: HideoutCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
