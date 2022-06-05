import { ProfileHelper } from "../helpers/ProfileHelper";
import { TraderAssortHelper } from "../helpers/TraderAssortHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IBarterScheme, ITraderAssort, ITraderBase } from "../models/eft/common/tables/ITrader";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { TraderAssortService } from "../services/TraderAssortService";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class TraderController {
    private logger;
    private databaseServer;
    private traderAssortHelper;
    private profileHelper;
    private traderHelper;
    private timeUtil;
    private traderAssortService;
    private jsonUtil;
    constructor(logger: ILogger, databaseServer: DatabaseServer, traderAssortHelper: TraderAssortHelper, profileHelper: ProfileHelper, traderHelper: TraderHelper, timeUtil: TimeUtil, traderAssortService: TraderAssortService, jsonUtil: JsonUtil);
    load(): void;
    getTrader(traderID: string, sessionID: string): ITraderBase;
    getAllTraders(sessionID: string): ITraderBase[];
    updateTraders(): boolean;
    getAssort(sessionId: string, traderId: string): ITraderAssort;
    getPurchasesData(traderID: string, sessionID: string): Record<string, IBarterScheme[][]>;
}
