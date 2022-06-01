import { ProfileHelper } from "../helpers/ProfileHelper";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { Item } from "../models/eft/common/tables/IItem";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class RagfairOfferService {
    private logger;
    private timeUtil;
    private databaseServer;
    private saveServer;
    private ragfairServerHelper;
    private profileHelper;
    private itemEventRouter;
    private httpResponse;
    private configServer;
    private playerOffersLoaded;
    private toUpdate;
    private expiredOffers;
    private offers;
    private ragfairConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, databaseServer: DatabaseServer, saveServer: SaveServer, ragfairServerHelper: RagfairServerHelper, profileHelper: ProfileHelper, itemEventRouter: ItemEventRouter, httpResponse: HttpResponseUtil, configServer: ConfigServer);
    getOffers(): IRagfairOffer[];
    getOfferByOfferId(offerId: string): IRagfairOffer;
    getOffersOfType(templateId: string): IRagfairOffer[];
    addOffer(offer: IRagfairOffer): void;
    addOfferToExpired(offer: Item): void;
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
    private getStaleOffers;
    private isStale;
    private processStaleOffer;
    private returnPlayerOffer;
}
