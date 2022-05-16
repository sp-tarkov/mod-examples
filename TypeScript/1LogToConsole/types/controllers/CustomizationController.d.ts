import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IWearClothingRequestData } from "../@types/eft/customization/IWearClothingRequestData";
import { IBuyClothingRequestData } from "../@types/eft/customization/IBuyClothingRequestData";
import { ISuit } from "../@types/eft/common/tables/ITrader";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../@types/spt/utils/ILogger";
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
