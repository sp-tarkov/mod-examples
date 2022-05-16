import { IPmcData } from "../../@types/eft/common/IPmcData";
import { RagfairCallbacks } from "../../callbacks/RagfairCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class RagfairItemEventRouter extends ItemEventRouterDefinition {
    private ragfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
