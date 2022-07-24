import { RagfairAssortGenerator } from "../generators/RagfairAssortGenerator";
import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator";
import { Item } from "../models/eft/common/tables/IItem";
import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { ITraderConfig } from "../models/spt/config/ITraderConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { FenceService } from "../services/FenceService";
import { TraderAssortService } from "../services/TraderAssortService";
import { JsonUtil } from "../utils/JsonUtil";
import { MathUtil } from "../utils/MathUtil";
import { AssortHelper } from "./AssortHelper";
import { PaymentHelper } from "./PaymentHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class TraderAssortHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected mathUtil: MathUtil;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected assortHelper: AssortHelper;
    protected paymentHelper: PaymentHelper;
    protected ragfairAssortGenerator: RagfairAssortGenerator;
    protected ragfairOfferGenerator: RagfairOfferGenerator;
    protected traderAssortService: TraderAssortService;
    protected fenceService: FenceService;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, mathUtil: MathUtil, databaseServer: DatabaseServer, profileHelper: ProfileHelper, assortHelper: AssortHelper, paymentHelper: PaymentHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferGenerator: RagfairOfferGenerator, traderAssortService: TraderAssortService, fenceService: FenceService, configServer: ConfigServer);
    /**
     * Get a traders assorts
     * Can be used for returning ragfair / fence assorts
     * @param sessionId session id
     * @param traderId trader id
     * @returns a traders assorts
     */
    getAssort(sessionId: string, traderId: string): ITraderAssort;
    /**
     * Iterate over all assorts barter_scheme values, find barters selling for money and multiply by multipler in config
     * @param traderAssort Assorts to multiple price of
     */
    protected multiplyItemPricesByConfigMultipler(traderAssort: ITraderAssort): void;
    /**
     * Get an array of pristine trader items prior to any alteration by player (as they were on server start)
     * @param traderId trader id
     * @returns array of Items
     */
    protected getPristineTraderAssorts(traderId: string): Item[];
    /**
     * Returns generated ragfair offers in a trader assort format
     * @returns Trader assort object
     */
    protected getRagfairDataAsTraderAssort(): ITraderAssort;
}
