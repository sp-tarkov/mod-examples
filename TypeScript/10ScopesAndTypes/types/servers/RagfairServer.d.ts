import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { RagfairCategoriesService } from "../services/RagfairCategoriesService";
import { RagfairLinkedItemService } from "../services/RagfairLinkedItemService";
import { RagfairOfferService } from "../services/RagfairOfferService";
import { RagfairPriceService } from "../services/RagfairPriceService";
import { RagfairRequiredItemsService } from "../services/RagfairRequiredItemsService";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { ConfigServer } from "./ConfigServer";
import { SaveServer } from "./SaveServer";
export declare class RagfairServer {
    private logger;
    private ragfairOfferGenerator;
    private ragfairServerHelper;
    private profileHelper;
    private itemEventRouter;
    private httpResponse;
    private saveServer;
    private ragfairPriceService;
    private ragfairOfferService;
    private ragfairLinkedItemService;
    private ragfairCategoriesService;
    private ragfairRequiredItemsService;
    private configServer;
    private ragfairConfig;
    constructor(logger: ILogger, ragfairOfferGenerator: RagfairOfferGenerator, ragfairServerHelper: RagfairServerHelper, profileHelper: ProfileHelper, itemEventRouter: ItemEventRouter, httpResponse: HttpResponseUtil, saveServer: SaveServer, ragfairPriceService: RagfairPriceService, ragfairOfferService: RagfairOfferService, ragfairLinkedItemService: RagfairLinkedItemService, ragfairCategoriesService: RagfairCategoriesService, ragfairRequiredItemsService: RagfairRequiredItemsService, configServer: ConfigServer);
    load(): void;
    update(): void;
    private processExpiredOffer;
    returnPlayerOffer(offer: IRagfairOffer): IItemEventRouterResponse;
    getCategories(): Record<string, number>;
    /**
     * Disable/Hide an offer from flea
     * @param offerId
     */
    hideOffer(offerId: string): void;
    getOffer(offerID: string): IRagfairOffer;
    removeOfferStack(offerID: string, amount: number): void;
    doesOfferExist(offerId: string): boolean;
    addPlayerOffers(): void;
}
