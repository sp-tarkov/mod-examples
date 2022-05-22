import { InsuranceController } from "../controllers/InsuranceController";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData";
import { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
import { InsuranceService } from "../services/InsuranceService";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
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
