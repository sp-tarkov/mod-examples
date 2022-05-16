import { RepairController } from "../controllers/RepairController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IRepairActionDataRequest } from "../@types/eft/repair/IRepairActionDataRequest";
import { ITraderRepairActionDataRequest } from "../@types/eft/repair/ITraderRepairActionDataRequest";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
export declare class RepairCallbacks {
    private repairController;
    constructor(repairController: RepairController);
    traderRepair(pmcData: IPmcData, body: ITraderRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
    repair(pmcData: IPmcData, body: IRepairActionDataRequest, sessionID: string): IItemEventRouterResponse;
}
