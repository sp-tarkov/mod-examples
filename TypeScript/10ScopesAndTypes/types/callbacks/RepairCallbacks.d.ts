import { RepairController } from "../controllers/RepairController";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IRepairActionDataRequest } from "../models/eft/repair/IRepairActionDataRequest";
import { ITraderRepairActionDataRequest } from "../models/eft/repair/ITraderRepairActionDataRequest";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
export declare class RepairCallbacks {
    private repairController;
    constructor(repairController: RepairController);
    traderRepair(pmcData: IPmcData, body: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    repair(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
