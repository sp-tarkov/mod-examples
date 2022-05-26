import { CustomizationController } from "../controllers/CustomizationController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IPmcData } from "../models/eft/common/IPmcData";
import { ISuit } from "../models/eft/common/tables/ITrader";
import { IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData";
import { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { SaveServer } from "../servers/SaveServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class CustomizationCallbacks {
    private customizationController;
    private saveServer;
    private httpResponse;
    constructor(customizationController: CustomizationController, saveServer: SaveServer, httpResponse: HttpResponseUtil);
    getSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<{
        _id: string;
        suites: string[];
    }>;
    getTraderSuits(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<ISuit[]>;
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
}
