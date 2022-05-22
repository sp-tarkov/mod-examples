import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { TimeUtil } from "../utils/TimeUtil";
import { Item } from "../models/eft/common/tables/IItem";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
export declare class RagfairOfferService {
    private timeUtil;
    private databaseServer;
    private saveServer;
    private configServer;
    private playerOffersLoaded;
    private toUpdate;
    private expiredOffers;
    private offers;
    private ragfairConfig;
    constructor(timeUtil: TimeUtil, databaseServer: DatabaseServer, saveServer: SaveServer, configServer: ConfigServer);
    getOffers(): IRagfairOffer[];
    getOfferByOfferId(offerId: string): IRagfairOffer;
    getOffersOfType(templateId: string): IRagfairOffer[];
    addOffer(offer: IRagfairOffer): void;
    addOfferToExpired(offer: Item): void;
    setTraderUpdateStatus(traderId: string, shouldUpdate: boolean): void;
    shouldTraderBeUpdated(traderID: string): boolean;
    /**
     * Get an array of expired offers that are still shown to player
     * @returns IRagfairOffer array
     */
    getExpiredActiveOffers(): IRagfairOffer[];
    getExpiredOfferCount(): number;
    getOfferIndexByOfferId(offerId: string): number;
    /**
     * Get an array of expired items not yet processed into new offers
     * @returns items that need to be turned into offers
     */
    getExpiredOffers(): Item[];
    resetExpiredOffers(): void;
    private isExpired;
    /**
     * Does the offer exist on the ragfair
     * @param offerId offer id to check for
     * @returns offer exists - true
     */
    doesOfferExist(offerId: string): boolean;
    getTraders(): Record<string, boolean>;
    flagTraderForUpdate(expiredOfferUserId: string): void;
    removeOffer(globalOfferIndex: number, countToRemove: number): void;
    removeOfferStack(offerID: string, amount: number): void;
    removeAllOffersByTrader(traderId: string): void;
    addTradersToUpdateList(): void;
    addPlayerOffers(): void;
}
