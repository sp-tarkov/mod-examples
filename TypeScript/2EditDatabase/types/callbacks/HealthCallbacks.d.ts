import { HealthController } from "../controllers/HealthController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { ISyncHealthRequestData } from "../@types/eft/health/ISyncHealthRequestData";
import { IOffraidEatRequestData } from "../@types/eft/health/IOffraidEatRequestData";
import { IOffraidHealRequestData } from "../@types/eft/health/IOffraidHealRequestData";
import { IHealthTreatmentRequestData } from "../@types/eft/health/IHealthTreatmentRequestData";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { HttpResponse } from "../utils/HttpResponse";
export declare class HealthCallbacks {
    private httpResponse;
    private profileHelper;
    private healthController;
    constructor(httpResponse: HttpResponse, profileHelper: ProfileHelper, healthController: HealthController);
    syncHealth(url: string, info: ISyncHealthRequestData, sessionID: string): IGetBodyResponseData<string>;
    offraidEat(pmcData: IPmcData, body: IOffraidEatRequestData, sessionID: string): any;
    offraidHeal(pmcData: IPmcData, body: IOffraidHealRequestData, sessionID: string): any;
    healthTreatment(pmcData: IPmcData, info: IHealthTreatmentRequestData, sessionID: string): any;
}
