import { IPmcData } from "../../@types/eft/common/IPmcData";
import { TradeCallbacks } from "../../callbacks/TradeCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class TradeItemEventRouter extends ItemEventRouterDefinition {
    private tradeCallbacks;
    constructor(tradeCallbacks: TradeCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
