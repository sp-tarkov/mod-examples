import { IPmcData } from "../models/eft/common/IPmcData";
import { Item } from "../models/eft/common/tables/IItem";
import { DatabaseServer } from "../servers/DatabaseServer";
import { RagfairPriceService } from "../services/RagfairPriceService";
import { ItemHelper } from "./ItemHelper";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class RagfairTaxHelper {
    private logger;
    private databaseServer;
    private ragfairPriceService;
    private itemHelper;
    constructor(logger: ILogger, databaseServer: DatabaseServer, ragfairPriceService: RagfairPriceService, itemHelper: ItemHelper);
    calculateTax(item: Item, pmcData: IPmcData, requirementsValue: number, offerItemCount: number, sellInOnePiece: boolean): number;
    private calculateItemWorth;
}
