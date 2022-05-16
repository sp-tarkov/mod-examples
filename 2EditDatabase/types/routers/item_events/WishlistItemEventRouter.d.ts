import { IPmcData } from "../../@types/eft/common/IPmcData";
import { WishlistCallbacks } from "../../callbacks/WishlistCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class WishlistItemEventRouter extends ItemEventRouterDefinition {
    private wishlistCallbacks;
    constructor(wishlistCallbacks: WishlistCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
