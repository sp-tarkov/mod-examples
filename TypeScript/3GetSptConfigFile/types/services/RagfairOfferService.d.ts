import { ProfileHelper } from "../helpers/ProfileHelper";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { Item } from "../models/eft/common/tables/IItem";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { RagfairCategoriesService } from "./RagfairCategoriesService";
export declare class RagfairOfferService {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected ragfairServerHelper: RagfairServerHelper;
    protected ragfairCategoriesService: RagfairCategoriesService;
    protected profileHelper: ProfileHelper;
    protected itemEventRouter: ItemEventRouter;
    protected httpResponse: HttpResponseUtil;
    protected configServer: ConfigServer;
    protected playerOffersLoaded: boolean;
    protected toUpdate: Record<string, boolean>;
    protected expiredOffers: Item[];
    protected offers: IRagfairOffer[];
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, databaseServer: DatabaseServer, saveServer: SaveServer, ragfairServerHelper: RagfairServerHelper, ragfairCategoriesService: RagfairCategoriesService, profileHelper: ProfileHelper, itemEventRouter: ItemEventRouter, httpResponse: HttpResponseUtil, configServer: ConfigServer);
    /**
     * Get all offers
     * @returns IRagfairOffer array
     */
    getOffers(): IRagfairOffer[];
    getOfferByOfferId(offerId: string): IRagfairOffer;
    getOffersOfType(templateId: string): IRagfairOffer[];
    addOffer(offer: IRagfairOffer): void;
    addOfferToExpired(staleOffer: IRagfairOffer): void;
    setTraderUpdateStatus(traderId: string, shouldUpdate: boolean): void;
    shouldTraderBeUpdated(traderID: string): boolean;
    getExpiredOfferCount(): number;
    /**
     * Get an array of expired items not yet processed into new offers
     * @returns items that need to be turned into offers
     */
    getExpiredOffers(): Item[];
    resetExpiredOffers(): void;
    /**
     * Does the offer exist on the ragfair
     * @param offerId offer id to check for
     * @returns offer exists - true
     */
    doesOfferExist(offerId: string): boolean;
    getTraders(): Record<string, boolean>;
    flagTraderForUpdate(expiredOfferUserId: string): void;
    removeOfferById(offerId: string): void;
    removeOfferStack(offerID: string, amount: number): void;
    removeAllOffersByTrader(traderId: string): void;
    addTradersToUpdateList(): void;
    addPlayerOffers(): void;
    expireStaleOffers(): void;
    /**
     * Get an array of stale offers that are still shown to player
     * @returns IRagfairOffer array
     */
    protected getStaleOffers(): IRagfairOffer[];
    protected isStale(offer: IRagfairOffer, time: number): boolean;
    protected processStaleOffer(staleOffer: IRagfairOffer): void;
    protected returnPlayerOffer(offer: IRagfairOffer): IItemEventRouterResponse;
}
