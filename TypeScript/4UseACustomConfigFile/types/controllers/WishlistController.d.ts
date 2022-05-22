import { ItemEventRouter } from "../routers/ItemEventRouter";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IWishlistActionData } from "../models/eft/wishlist/IWishlistActionData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
export declare class WishlistController {
    private itemEvenRouter;
    constructor(itemEvenRouter: ItemEventRouter);
    addToWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    removeFromWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
