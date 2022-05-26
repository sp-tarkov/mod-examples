import { Item } from "../models/eft/common/tables/IItem";
import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { IGetOffersResult } from "../models/eft/ragfair/IGetOffersResult";
import { ISearchRequestData } from "../models/eft/ragfair/ISearchRequestData";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { RagfairLinkedItemService } from "../services/RagfairLinkedItemService";
import { JsonUtil } from "../utils/JsonUtil";
import { HandbookHelper } from "./HandbookHelper";
import { ItemHelper } from "./ItemHelper";
import { TraderAssortHelper } from "./TraderAssortHelper";
import { UtilityHelper } from "./UtilityHelper";
export declare class RagfairHelper {
    private logger;
    private jsonUtil;
    private traderAssortHelper;
    private databaseServer;
    private handbookHelper;
    private itemHelper;
    private ragfairLinkedItemService;
    private utilityHelper;
    private configServer;
    private ragfairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, traderAssortHelper: TraderAssortHelper, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, itemHelper: ItemHelper, ragfairLinkedItemService: RagfairLinkedItemService, utilityHelper: UtilityHelper, configServer: ConfigServer);
    /**
    * Gets currency TAG from TPL
    * @param {string} currency
    * @returns string
    */
    getCurrencyTag(currency: string): string;
    filterCategories(sessionID: string, info: ISearchRequestData): string[];
    getDisplayableAssorts(sessionID: string): Record<string, ITraderAssort>;
    private getCategoryList;
    countCategories(result: IGetOffersResult): void;
    /**
     * Merges Root Items
     * Ragfair allows abnormally large stacks.
     */
    mergeStackable(items: Item[]): Item[];
    getCurrencySymbol(currencyTpl: string): string;
    formatCurrency(moneyAmount: number): string;
}
