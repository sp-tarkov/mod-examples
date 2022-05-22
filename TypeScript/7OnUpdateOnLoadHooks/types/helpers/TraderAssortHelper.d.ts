import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { ILogger } from "../models/spt/utils/ILogger";
import { RagfairAssortGenerator } from "../generators/RagfairAssortGenerator";
import { RagfairOfferGenerator } from "../generators/RagfairOfferGenerator";
import { DatabaseServer } from "../servers/DatabaseServer";
import { FenceService } from "../services/FenceService";
import { TraderAssortService } from "../services/TraderAssortService";
import { JsonUtil } from "../utils/JsonUtil";
import { AssortHelper } from "./AssortHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class TraderAssortHelper {
    private logger;
    private jsonUtil;
    private databaseServer;
    private profileHelper;
    private assortHelper;
    private ragfairAssortGenerator;
    private ragfairOfferGenerator;
    private traderAssortService;
    private fenceService;
    constructor(logger: ILogger, jsonUtil: JsonUtil, databaseServer: DatabaseServer, profileHelper: ProfileHelper, assortHelper: AssortHelper, ragfairAssortGenerator: RagfairAssortGenerator, ragfairOfferGenerator: RagfairOfferGenerator, traderAssortService: TraderAssortService, fenceService: FenceService);
    getAssort(sessionId: string, traderId: string): ITraderAssort;
}
