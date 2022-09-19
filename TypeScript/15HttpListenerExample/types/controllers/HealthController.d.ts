import { ItemHelper } from "../helpers/ItemHelper";
import { PaymentService } from "../services/PaymentService";
import { InventoryHelper } from "../helpers/InventoryHelper";
import { HealthHelper } from "../helpers/HealthHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IHealthTreatmentRequestData } from "../models/eft/health/IHealthTreatmentRequestData";
import { IOffraidEatRequestData } from "../models/eft/health/IOffraidEatRequestData";
import { IOffraidHealRequestData } from "../models/eft/health/IOffraidHealRequestData";
import { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class HealthController {
    protected logger: ILogger;
    protected itemEventRouter: ItemEventRouter;
    protected itemHelper: ItemHelper;
    protected paymentService: PaymentService;
    protected inventoryHelper: InventoryHelper;
    protected healthHelper: HealthHelper;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, itemHelper: ItemHelper, paymentService: PaymentService, inventoryHelper: InventoryHelper, healthHelper: HealthHelper);
    /**
     * stores in-raid player health
     * @param pmcData Player profile
     * @param info Request data
     * @param sessionID
     * @param addEffects Should effects found be added or removed from profile
     */
    saveVitality(pmcData: IPmcData, info: ISyncHealthRequestData, sessionID: string, addEffects?: boolean): void;
    /**
     * When healing in menu
     * @param pmcData
     * @param body
     * @param sessionID
     * @returns
     */
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): IItemEventRouterResponse;
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Occurs on post-raid healing page
     * @param pmcData player profile
     * @param info Request data from client
     * @param sessionID Session id
     * @returns
     */
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): IItemEventRouterResponse;
}
