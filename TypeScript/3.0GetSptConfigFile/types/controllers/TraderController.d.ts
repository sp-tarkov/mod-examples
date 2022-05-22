import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { DatabaseServer } from "../servers/DatabaseServer";
import { TraderAssortService } from "../services/TraderAssortService";
import { IBarterScheme, ITraderAssort, ITraderBase } from "../models/eft/common/tables/ITrader";
import { TraderHelper } from "../helpers/TraderHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { ConfigServer } from "../servers/ConfigServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { TraderAssortHelper } from "../helpers/TraderAssortHelper";
export declare class TraderController {
    private logger;
    private databaseServer;
    private traderAssortHelper;
    private profileHelper;
    private traderHelper;
    private timeUtil;
    private traderAssortService;
    private jsonUtil;
    private configServer;
    private traderConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, traderAssortHelper: TraderAssortHelper, profileHelper: ProfileHelper, traderHelper: TraderHelper, timeUtil: TimeUtil, traderAssortService: TraderAssortService, jsonUtil: JsonUtil, configServer: ConfigServer);
    load(): void;
    getTrader(traderID: string, sessionID: string): ITraderBase;
    getAllTraders(sessionID: string): ITraderBase[];
    updateTraders(): boolean;
    getAssort(sessionId: string, traderId: string): ITraderAssort;
    getPurchasesData(traderID: string, sessionID: string): Record<string, IBarterScheme[][]>;
}
