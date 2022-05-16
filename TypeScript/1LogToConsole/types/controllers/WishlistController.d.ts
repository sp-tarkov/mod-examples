import { ItemEventRouter } from "../routers/ItemEventRouter";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IWishlistActionData } from "../@types/eft/wishlist/IWishlistActionData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
export declare class WishlistController {
    private itemEvenRouter;
    constructor(itemEvenRouter: ItemEventRouter);
    addToWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    removeFromWishList(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
