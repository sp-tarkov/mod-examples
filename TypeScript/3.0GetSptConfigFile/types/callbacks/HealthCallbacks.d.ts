import { HealthController } from "../controllers/HealthController";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IHealthTreatmentRequestData } from "../models/eft/health/IHealthTreatmentRequestData";
import { IOffraidEatRequestData } from "../models/eft/health/IOffraidEatRequestData";
import { IOffraidHealRequestData } from "../models/eft/health/IOffraidHealRequestData";
import { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class HealthCallbacks {
    private httpResponse;
    private profileHelper;
    private healthController;
    constructor(httpResponse: HttpResponseUtil, profileHelper: ProfileHelper, healthController: HealthController);
    syncHealth(url: string, info: ISyncHealthRequestData, sessionID: string): IGetBodyResponseData<string>;
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): IItemEventRouterResponse;
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): IItemEventRouterResponse;
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): IItemEventRouterResponse;
}
