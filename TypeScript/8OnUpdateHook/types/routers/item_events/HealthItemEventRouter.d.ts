import { IPmcData } from "../../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse";
import { HealthCallbacks } from "../../callbacks/HealthCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class HealthItemEventRouter extends ItemEventRouterDefinition {
    private healthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
