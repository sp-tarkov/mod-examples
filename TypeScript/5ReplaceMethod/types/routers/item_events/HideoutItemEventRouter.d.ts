import { IPmcData } from "../../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse";
import { HideoutCallbacks } from "../../callbacks/HideoutCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class HideoutItemEventRouter extends ItemEventRouterDefinition {
    private hideoutCallbacks;
    constructor(hideoutCallbacks: HideoutCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
