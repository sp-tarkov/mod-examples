import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IWearClothingRequestData } from "../models/eft/customization/IWearClothingRequestData";
import { IBuyClothingRequestData } from "../models/eft/customization/IBuyClothingRequestData";
import { ISuit } from "../models/eft/common/tables/ITrader";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class CustomizationController {
    private logger;
    private itemEventRouter;
    private databaseServer;
    private saveServer;
    private profileHelper;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, databaseServer: DatabaseServer, saveServer: SaveServer, profileHelper: ProfileHelper);
    getTraderSuits(traderID: string, sessionID: string): ISuit[];
    wearClothing(pmcData: IPmcData, body: IWearClothingRequestData, sessionID: string): IItemEventRouterResponse;
    buyClothing(pmcData: IPmcData, body: IBuyClothingRequestData, sessionID: string): IItemEventRouterResponse;
    private getAllTraderSuits;
}
