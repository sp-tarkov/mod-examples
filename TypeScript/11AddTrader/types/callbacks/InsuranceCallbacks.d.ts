import { InsuranceController } from "../controllers/InsuranceController";
import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData";
import { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ConfigServer } from "../servers/ConfigServer";
import { InsuranceService } from "../services/InsuranceService";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class InsuranceCallbacks extends OnLoadOnUpdate {
    private insuranceController;
    private insuranceService;
    private httpResponse;
    private configServer;
    private insuranceConfig;
    constructor(insuranceController: InsuranceController, insuranceService: InsuranceService, httpResponse: HttpResponseUtil, configServer: ConfigServer);
    onLoad(): void;
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): IGetBodyResponseData<any>;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): IItemEventRouterResponse;
    onUpdate(secondsSinceLastRun: number): boolean;
    getRoute(): string;
}
