import { InventoryHelper } from "../helpers/InventoryHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { DatabaseServer } from "../servers/DatabaseServer";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBuyTradeRequestData } from "../@types/eft/trade/IProcessBuyTradeRequestData";
import { IProcessSellTradeRequestData } from "../@types/eft/trade/IProcessSellTradeRequestData";
import { TraderHelper } from "../helpers/TraderHelper";
import { PaymentHelper } from "../helpers/PaymentHelper";
import { HandbookHelper } from "../helpers/HandbookHelper";
import { HttpResponse } from "../utils/HttpResponse";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class PaymentService {
    private logger;
    private httpResponse;
    private databaseServer;
    private handbookHelper;
    private traderHelper;
    private itemHelper;
    private inventoryHelper;
    private paymentHelper;
    constructor(logger: ILogger, httpResponse: HttpResponse, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, traderHelper: TraderHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, paymentHelper: PaymentHelper);
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
    addPaymentToOutput(pmcData: IPmcData, currencyTpl: string, amountToPay: number, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
}
