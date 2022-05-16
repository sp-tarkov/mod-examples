import { SaveServer } from "../servers/SaveServer";
import { CustomizationController } from "../controllers/CustomizationController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IBuyClothingRequestData } from "../@types/eft/customization/IBuyClothingRequestData";
import { IWearClothingRequestData } from "../@types/eft/customization/IWearClothingRequestData";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { ISuit } from "../@types/eft/common/tables/ITrader";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { HttpResponse } from "../utils/HttpResponse";
export declare class CustomizationCallbacks {
    private customizationController;
    private saveServer;
    private httpResponse;
    constructor(customizationController: CustomizationController, saveServer: SaveServer, httpResponse: HttpResponse);
    getSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<{
        _id: string;
        suites: string[];
    }>;
    getTraderSuits(url: string, info: any, sessionID: string): IGetBodyResponseData<ISuit[]>;
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
}
