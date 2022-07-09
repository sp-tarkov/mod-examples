import { HandbookHelper } from "../helpers/HandbookHelper";
import { InventoryHelper } from "../helpers/InventoryHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { PaymentHelper } from "../helpers/PaymentHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { Item } from "../models/eft/common/tables/IItem";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBuyTradeRequestData } from "../models/eft/trade/IProcessBuyTradeRequestData";
import { IProcessSellTradeRequestData } from "../models/eft/trade/IProcessSellTradeRequestData";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class PaymentService {
    protected logger: ILogger;
    protected httpResponse: HttpResponseUtil;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected traderHelper: TraderHelper;
    protected itemHelper: ItemHelper;
    protected inventoryHelper: InventoryHelper;
    protected paymentHelper: PaymentHelper;
    constructor(logger: ILogger, httpResponse: HttpResponseUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, traderHelper: TraderHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, paymentHelper: PaymentHelper);
    /**
     * Take money and insert items into return to server request
     * @param {Object} pmcData
     * @param {Object} body
     * @param {string} sessionID
     * @returns Object
     */
    payMoney(pmcData: IPmcData, body: IProcessBuyTradeRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Receive money back after selling
     * @param {IPmcData} pmcData
     * @param {number} amount
     * @param {IProcessSellTradeRequestData} body
     * @param {IItemEventRouterResponse} output
     * @param {string} sessionID
     * @returns IItemEventRouterResponse
     */
    getMoney(pmcData: IPmcData, amount: number, body: IProcessSellTradeRequestData, output: IItemEventRouterResponse, sessionID: string): IItemEventRouterResponse;
    /**
   * Recursively checks if the given item is
   * inside the stash, that is it has the stash as
   * ancestor with slotId=hideout
   */
    protected isItemInStash(pmcData: IPmcData, item: Item): boolean;
    addPaymentToOutput(pmcData: IPmcData, currencyTpl: string, amountToPay: number, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
}
