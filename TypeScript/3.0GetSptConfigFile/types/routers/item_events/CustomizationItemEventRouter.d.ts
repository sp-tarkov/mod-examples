import { IPmcData } from "../../@types/eft/common/IPmcData";
import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class CustomizationItemEventRouter extends ItemEventRouterDefinition {
    private customizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
