import { IPmcData } from "../../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse";
import { InventoryCallbacks } from "../../callbacks/InventoryCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class InventoryItemEventRouter extends ItemEventRouterDefinition {
    private inventoryCallbacks;
    constructor(inventoryCallbacks: InventoryCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
