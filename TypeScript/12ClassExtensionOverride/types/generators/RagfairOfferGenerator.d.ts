import { ItemHelper } from "../helpers/ItemHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { Item } from "../models/eft/common/tables/IItem";
import { IBarterScheme } from "../models/eft/common/tables/ITrader";
import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { RagfairOfferService } from "../services/RagfairOfferService";
import { RagfairPriceService } from "../services/RagfairPriceService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { RagfairAssortGenerator } from "./RagfairAssortGenerator";
export declare class RagfairOfferGenerator {
    private logger;
    private jsonUtil;
    private hashUtil;
    private randomUtil;
    private timeUtil;
    private databaseServer;
    private ragfairServerHelper;
    private saveServer;
    private presetHelper;
    private ragfairAssortGenerator;
    private ragfairOfferService;
    private ragfairPriceService;
    private fenceService;
    private itemHelper;
    private configServer;
    private ragfairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, ragfairServerHelper: RagfairServerHelper, saveServer: SaveServer, presetHelper: PresetHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferService: RagfairOfferService, ragfairPriceService: RagfairPriceService, fenceService: FenceService, itemHelper: ItemHelper, configServer: ConfigServer);
    createOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece?: boolean): IRagfairOffer;
    private getTraderId;
    private getRating;
    private getRatingGrowing;
    private getOfferEndTime;
    /**
     * Create multiple offers for items by using a unique list of items we've generated previously
     * @param expiredOffers
     */
    generateDynamicOffers(expiredOffers?: Item[]): void;
    generateTraderOffers(traderID: string): void;
    private getItemCondition;
    private addMissingCondition;
    private getOfferRequirements;
    /**
     * Create a flea offer and store it in the Ragfair server offers array
     */
    createFleaOffer(userID: string, time: number, items: Item[], barterScheme: IBarterScheme[], loyalLevel: number, price: number, sellInOnePiece?: boolean): IRagfairOffer;
}
