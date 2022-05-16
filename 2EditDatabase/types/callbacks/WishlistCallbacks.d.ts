import { WishlistController } from "../controllers/WishlistController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IWishlistActionData } from "../@types/eft/wishlist/IWishlistActionData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
export declare class WishlistCallbacks {
    private wishlistController;
    constructor(wishlistController: WishlistController);
    addToWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
    removeFromWishlist(pmcData: IPmcData, body: IWishlistActionData, sessionID: string): IItemEventRouterResponse;
}
