import { IPmcData } from "../../@types/eft/common/IPmcData";
import { RepairCallbacks } from "../../callbacks/RepairCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class RepairItemEventRouter extends ItemEventRouterDefinition {
    private repairCallbacks;
    constructor(repairCallbacks: RepairCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
