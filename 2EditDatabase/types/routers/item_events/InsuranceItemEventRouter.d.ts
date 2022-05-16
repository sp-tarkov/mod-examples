import { IPmcData } from "../../@types/eft/common/IPmcData";
import { InsuranceCallbacks } from "../../callbacks/InsuranceCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class InsuranceItemEventRouter extends ItemEventRouterDefinition {
    private insuranceCallbacks;
    constructor(insuranceCallbacks: InsuranceCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
