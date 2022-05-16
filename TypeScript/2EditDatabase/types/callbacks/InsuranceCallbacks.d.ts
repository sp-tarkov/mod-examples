import { InsuranceController } from "../controllers/InsuranceController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IGetInsuranceCostRequestData } from "../@types/eft/insurance/IGetInsuranceCostRequestData";
import { IInsureRequestData } from "../@types/eft/insurance/IInsureRequestData";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { ConfigServer } from "../servers/ConfigServer";
import { HttpResponse } from "../utils/HttpResponse";
import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
import { InsuranceService } from "../services/InsuranceService";
export declare class InsuranceCallbacks extends OnLoadOnUpdate {
    private insuranceController;
    private insuranceService;
    private httpResponse;
    private configServer;
    private insuranceConfig;
    constructor(insuranceController: InsuranceController, insuranceService: InsuranceService, httpResponse: HttpResponse, configServer: ConfigServer);
    onLoad(): void;
    getInsuranceCost(url: string, info: IGetInsuranceCostRequestData, sessionID: string): IGetBodyResponseData<any>;
    insure(pmcData: IPmcData, body: IInsureRequestData, sessionID: string): any;
    onUpdate(secondsSinceLastRun: number): boolean;
    getRoute(): string;
}
