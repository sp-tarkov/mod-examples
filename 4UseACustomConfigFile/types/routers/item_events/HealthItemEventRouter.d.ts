import { IPmcData } from "../../@types/eft/common/IPmcData";
import { HealthCallbacks } from "../../callbacks/HealthCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class HealthItemEventRouter extends ItemEventRouterDefinition {
    private healthCallbacks;
    constructor(healthCallbacks: HealthCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
