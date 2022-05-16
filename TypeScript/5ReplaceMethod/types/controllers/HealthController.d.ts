import { ItemHelper } from "../helpers/ItemHelper";
import { PaymentService } from "../services/PaymentService";
import { InventoryHelper } from "../helpers/InventoryHelper";
import { HealthHelper } from "../helpers/HealthHelper";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IHealthTreatmentRequestData } from "../@types/eft/health/IHealthTreatmentRequestData";
import { IOffraidEatRequestData } from "../@types/eft/health/IOffraidEatRequestData";
import { IOffraidHealRequestData } from "../@types/eft/health/IOffraidHealRequestData";
import { ISyncHealthRequestData } from "../@types/eft/health/ISyncHealthRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class HealthController {
    private logger;
    private itemEventRouter;
    private itemHelper;
    private paymentService;
    private inventoryHelper;
    private healthHelper;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, itemHelper: ItemHelper, paymentService: PaymentService, inventoryHelper: InventoryHelper, healthHelper: HealthHelper);
    saveVitality(pmcData: IPmcData, info: ISyncHealthRequestData, sessionID: string): void;
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): IItemEventRouterResponse;
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): IItemEventRouterResponse;
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): IItemEventRouterResponse;
}
