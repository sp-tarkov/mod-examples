import { QuestHelper } from "../helpers/QuestHelper";
import { RepairHelper } from "../helpers/RepairHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IRepairActionDataRequest } from "../models/eft/repair/IRepairActionDataRequest";
import { ITraderRepairActionDataRequest } from "../models/eft/repair/ITraderRepairActionDataRequest";
import { IRepairConfig } from "../models/spt/config/IRepairConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { PaymentService } from "../services/PaymentService";
export declare class RepairController {
    protected logger: ILogger;
    protected itemEventRouter: ItemEventRouter;
    protected databaseServer: DatabaseServer;
    protected questHelper: QuestHelper;
    protected traderHelper: TraderHelper;
    protected paymentService: PaymentService;
    protected repairHelper: RepairHelper;
    protected configServer: ConfigServer;
    protected repairConfig: IRepairConfig;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, databaseServer: DatabaseServer, questHelper: QuestHelper, traderHelper: TraderHelper, paymentService: PaymentService, repairHelper: RepairHelper, configServer: ConfigServer);
    /**
     * Repair with trader
     * @param pmcData player profile
     * @param body endpoint request data
     * @param sessionID session id
     * @returns item event router action
     */
    traderRepair(pmcData: IPmcData, body: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    /**
     * Repair with repair kit
     * @param pmcData player profile
     * @param body endpoint request data
     * @param sessionID session id
     * @returns item event router action
     */
    repairWithKit(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
