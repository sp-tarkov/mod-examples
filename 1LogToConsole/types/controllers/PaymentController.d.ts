import { IPmcData } from "../@types/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBuyTradeRequestData } from "../@types/eft/trade/IProcessBuyTradeRequestData";
import { IProcessSellTradeRequestData } from "../@types/eft/trade/IProcessSellTradeRequestData";
export declare class PaymentController {
    /**
     * Check whether tpl is Money
     * @param {string} tpl
     * @returns void
     */
    static isMoneyTpl(tpl: string): boolean;
    /**
    * Gets currency TPL from TAG
    * @param {string} currency
    * @returns string
    */
    static getCurrency(currency: string): string;
    /**
    * Gets currency TAG from TPL
    * @param {string} currency
    * @returns string
    */
    static getCurrencyTag(currency: string): string;
    /**
    * Gets Currency to Ruble conversion Value
    * @param {number} value
    * @param {string} currencyFrom
    * @returns number
    */
    static inRUB(value: number, currencyFrom: string): number;
    /**
     * Gets Ruble to Currency conversion Value
     * @param {number} value
     * @param {string} currencyTo
     * @returns number
     */
    static fromRUB(value: number, currencyTo: string): number;
    /**
     * Take money and insert items into return to server request
     * @param {Object} pmcData
     * @param {Object} body
     * @param {string} sessionID
     * @returns Object
     */
    static payMoney(pmcData: IPmcData, body: IProcessBuyTradeRequestData, sessionID: string, output: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Receive money back after selling
     * @param {IPmcData} pmcData
     * @param {number} amount
     * @param {IProcessSellTradeRequestData} body
     * @param {IItemEventRouterResponse} output
     * @param {string} sessionID
     * @returns IItemEventRouterResponse
     */
    static getMoney(pmcData: IPmcData, amount: number, body: IProcessSellTradeRequestData, output: IItemEventRouterResponse, sessionID: string): IItemEventRouterResponse;
}
