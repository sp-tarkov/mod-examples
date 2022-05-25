import { WishlistController } from "../controllers/WishlistController";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IWishlistActionData } from "../models/eft/wishlist/IWishlistActionData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
export declare class WishlistCallbacks 
{
    private wishlistController;
    constructor(wishlistController: WishlistController);
    addToWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    removeFromWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
