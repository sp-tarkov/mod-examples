import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { SaveServer } from "../servers/SaveServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ConfigServer } from "../servers/ConfigServer";
import { PaymentService } from "../services/PaymentService";
import { DialogueHelper } from "../helpers/DialogueHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData";
import { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { InsuranceService } from "../services/InsuranceService";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class InsuranceController {
    private logger;
    private randomUtil;
    private itemEventRouter;
    private timeUtil;
    private saveServer;
    private databaseServer;
    private itemHelper;
    private profileHelper;
    private dialogueHelper;
    private paymentService;
    private insuranceService;
    private configServer;
    private insuranceConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, itemEventRouter: ItemEventRouter, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, profileHelper: ProfileHelper, dialogueHelper: DialogueHelper, paymentService: PaymentService, // TODO: delay required
    insuranceService: InsuranceService, configServer: ConfigServer);
    processReturn(): void;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): IItemEventRouterResponse;
    cost(info: IGetInsuranceCostRequestData, sessionID: string): any;
    doAbsolutelyNothing(): void;
}
