import { JsonUtil } from "../utils/JsonUtil";
import { Item } from "../@types/eft/common/tables/IItem";
import { ITraderAssort } from "../@types/eft/common/tables/ITrader";
import { IGetOffersResult } from "../@types/eft/ragfair/IGetOffersResult";
import { ISearchRequestData } from "../@types/eft/ragfair/ISearchRequestData";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HandbookHelper } from "./HandbookHelper";
import { ItemHelper } from "./ItemHelper";
import { RagfairLinkedItemService } from "../services/RagfairLinkedItemService";
import { UtilityHelper } from "./UtilityHelper";
import { ConfigServer } from "../servers/ConfigServer";
import { ILogger } from "../@types/spt/utils/ILogger";
import { TraderAssortHelper } from "./TraderAssortHelper";
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
