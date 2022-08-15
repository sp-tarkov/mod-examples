import { InsuranceController } from "../controllers/InsuranceController";
import { OnUpdate } from "../di/OnUpdate";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IGetInsuranceCostRequestData } from "../models/eft/insurance/IGetInsuranceCostRequestData";
import { IGetInsuranceCostResponseData } from "../models/eft/insurance/IGetInsuranceCostResponseData";
import { IInsureRequestData } from "../models/eft/insurance/IInsureRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IInsuranceConfig } from "../models/spt/config/IInsuranceConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { InsuranceService } from "../services/InsuranceService";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class InsuranceCallbacks extends OnUpdate {
    protected insuranceController: InsuranceController;
    protected insuranceService: InsuranceService;
    protected httpResponse: HttpResponseUtil;
    protected configServer: ConfigServer;
    protected insuranceConfig: IInsuranceConfig;
    constructor(insuranceController: InsuranceController, insuranceService: InsuranceService, httpResponse: HttpResponseUtil, configServer: ConfigServer);
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): IGetBodyResponseData<IGetInsuranceCostResponseData>;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): IItemEventRouterResponse;
    onUpdate(secondsSinceLastRun: number): boolean;
    getRoute(): string;
}
