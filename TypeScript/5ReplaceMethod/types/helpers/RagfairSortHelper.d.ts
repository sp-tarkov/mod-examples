import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class RagfairSortHelper {
    private databaseServer;
    constructor(databaseServer: DatabaseServer);
    sortOffers(offers: IRagfairOffer[], type: number, direction?: number): IRagfairOffer[];
    private sortOffersByID;
    private sortOffersByRating;
    private sortOffersByName;
    private sortOffersByPrice;
    private sortOffersByExpiry;
}
