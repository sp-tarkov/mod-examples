import { ItemHelper } from "../helpers/ItemHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { IBarterScheme } from "../models/eft/common/tables/ITrader";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { RagfairCategoriesService } from "../services/RagfairCategoriesService";
import { RagfairOfferService } from "../services/RagfairOfferService";
import { RagfairPriceService } from "../services/RagfairPriceService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { RagfairAssortGenerator } from "./RagfairAssortGenerator";
export declare class RagfairOfferGenerator {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected ragfairServerHelper: RagfairServerHelper;
    protected saveServer: SaveServer;
    protected presetHelper: PresetHelper;
    protected ragfairAssortGenerator: RagfairAssortGenerator;
    protected ragfairOfferService: RagfairOfferService;
    protected ragfairPriceService: RagfairPriceService;
    protected ragfairCategoriesService: RagfairCategoriesService;
    protected fenceService: FenceService;
    protected itemHelper: ItemHelper;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, ragfairServerHelper: RagfairServerHelper, saveServer: SaveServer, presetHelper: PresetHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferService: RagfairOfferService, ragfairPriceService: RagfairPriceService, ragfairCategoriesService: RagfairCategoriesService, fenceService: FenceService, itemHelper: ItemHelper, configServer: ConfigServer);
    createOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece?: boolean): IRagfairOffer;
    protected getTraderId(userID: string): string;
    protected getRating(userID: string): number;
    protected getRatingGrowing(userID: string): boolean;
    protected getOfferEndTime(userID: string, time: number): number;
    /**
     * Create multiple offers for items by using a unique list of items we've generated previously
     * @param expiredOffers
     */
    generateDynamicOffers(expiredOffers?: Item[]): void;
    generateTraderOffers(traderID: string): void;
    protected getItemCondition(userID: string, items: Item[], itemDetails: ITemplateItem): Item[];
    protected addMissingCondition(item: Item): Item;
    protected getOfferRequirements(items: Item[]): {
        count: number;
        _tpl: string;
    }[];
    /**
     * Create a flea offer and store it in the Ragfair server offers array
     */
    createFleaOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece?: boolean): IRagfairOffer;
}
