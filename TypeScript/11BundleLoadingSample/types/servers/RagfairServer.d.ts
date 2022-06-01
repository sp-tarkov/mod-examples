import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { ILogger } from "../models/spt/utils/ILogger";
import { RagfairCategoriesService } from "../services/RagfairCategoriesService";
import { RagfairOfferService } from "../services/RagfairOfferService";
import { RagfairRequiredItemsService } from "../services/RagfairRequiredItemsService";
import { ConfigServer } from "./ConfigServer";
export declare class RagfairServer {
    private logger;
    private ragfairOfferGenerator;
    private ragfairOfferService;
    private ragfairCategoriesService;
    private ragfairRequiredItemsService;
    private configServer;
    private ragfairConfig;
    constructor(logger: ILogger, ragfairOfferGenerator: RagfairOfferGenerator, ragfairOfferService: RagfairOfferService, ragfairCategoriesService: RagfairCategoriesService, ragfairRequiredItemsService: RagfairRequiredItemsService, configServer: ConfigServer);
    load(): void;
    update(): void;
    getCategories(): Record<string, number>;
    /**
     * Disable/Hide an offer from flea
     * @param offerId
     */
    hideOffer(offerId: string): void;
    getOffer(offerID: string): IRagfairOffer;
    getOffers(): IRagfairOffer[];
    removeOfferStack(offerID: string, amount: number): void;
    doesOfferExist(offerId: string): boolean;
    addPlayerOffers(): void;
}
