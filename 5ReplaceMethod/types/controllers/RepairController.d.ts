import { DatabaseServer } from "../servers/DatabaseServer";
import { QuestHelper } from "../helpers/QuestHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { PaymentService } from "../services/PaymentService";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IRepairActionDataRequest } from "../@types/eft/repair/IRepairActionDataRequest";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ITraderRepairActionDataRequest } from "../@types/eft/repair/ITraderRepairActionDataRequest";
import { ConfigServer } from "../servers/ConfigServer";
import { IRepairConfig } from "../@types/spt/config/IRepairConfig";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { RepairHelper } from "../helpers/RepairHelper";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class RepairController {
    private logger;
    private itemEventRouter;
    private databaseServer;
    private questHelper;
    private traderHelper;
    private paymentService;
    private repairHelper;
    private configServer;
    repairConfig: IRepairConfig;
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
    repair(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
