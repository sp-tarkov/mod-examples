import { HttpResponse } from "../utils/HttpResponse";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator";
import { SaveServer } from "./SaveServer";
import { RagfairPriceService } from "../services/RagfairPriceService";
import { RagfairOfferService } from "../services/RagfairOfferService";
import { RagfairCategoriesService } from "../services/RagfairCategoriesService";
import { RagfairLinkedItemService } from "../services/RagfairLinkedItemService";
import { IRagfairOffer } from "../@types/eft/ragfair/IRagfairOffer";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ConfigServer } from "./ConfigServer";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { RagfairRequiredItemsService } from "../services/RagfairRequiredItemsService";
import { ILogger } from "../@types/spt/utils/ILogger";
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
    constructor(logger: ILogger, ragfairOfferGenerator: RagfairOfferGenerator, ragfairServerHelper: RagfairServerHelper, profileHelper: ProfileHelper, itemEventRouter: ItemEventRouter, httpResponse: HttpResponse, saveServer: SaveServer, ragfairPriceService: RagfairPriceService, ragfairOfferService: RagfairOfferService, ragfairLinkedItemService: RagfairLinkedItemService, ragfairCategoriesService: RagfairCategoriesService, ragfairRequiredItemsService: RagfairRequiredItemsService, configServer: ConfigServer);
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
