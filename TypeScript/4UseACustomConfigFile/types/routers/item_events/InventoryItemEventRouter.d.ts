import { IPmcData } from "../../@types/eft/common/IPmcData";
import { InventoryCallbacks } from "../../callbacks/InventoryCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class InventoryItemEventRouter extends ItemEventRouterDefinition {
    private inventoryCallbacks;
    constructor(inventoryCallbacks: InventoryCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
