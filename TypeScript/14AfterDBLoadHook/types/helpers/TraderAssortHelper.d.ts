import { RagfairAssortGenerator } from "../generators/RagfairAssortGenerator";
import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator";
import { Item } from "../models/eft/common/tables/IItem";
import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { FenceService } from "../services/FenceService";
import { TraderAssortService } from "../services/TraderAssortService";
import { JsonUtil } from "../utils/JsonUtil";
import { AssortHelper } from "./AssortHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class TraderAssortHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected assortHelper: AssortHelper;
    protected ragfairAssortGenerator: RagfairAssortGenerator;
    protected ragfairOfferGenerator: RagfairOfferGenerator;
    protected traderAssortService: TraderAssortService;
    protected fenceService: FenceService;
    constructor(logger: ILogger, jsonUtil: JsonUtil, databaseServer: DatabaseServer, profileHelper: ProfileHelper, assortHelper: AssortHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferGenerator: RagfairOfferGenerator, traderAssortService: TraderAssortService, fenceService: FenceService);
    /**
     * Get a traders assorts
     * Can be used for returning ragfair / fence assorts
     * @param sessionId session id
     * @param traderId trader id
     * @returns a traders assorts
     */
    getAssort(sessionId: string, traderId: string): ITraderAssort;
    /**
     * Get an array of pristine trader items prior to any alteration by player
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
