import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocaleService } from "../services/LocaleService";
export declare class RagfairSortHelper {
    protected databaseServer: DatabaseServer;
    protected localeService: LocaleService;
    constructor(databaseServer: DatabaseServer, localeService: LocaleService);
    sortOffers(offers: IRagfairOffer[], type: number, direction?: number): IRagfairOffer[];
    protected sortOffersByID(a: IRagfairOffer, b: IRagfairOffer): number;
    protected sortOffersByRating(a: IRagfairOffer, b: IRagfairOffer): number;
    protected sortOffersByName(a: IRagfairOffer, b: IRagfairOffer): number;
    protected sortOffersByPrice(a: IRagfairOffer, b: IRagfairOffer): number;
    protected sortOffersByExpiry(a: IRagfairOffer, b: IRagfairOffer): number;
}
