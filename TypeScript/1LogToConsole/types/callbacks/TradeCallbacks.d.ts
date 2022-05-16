import { TradeController } from "../controllers/TradeController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IProcessRagfairTradeRequestData } from "../@types/eft/trade/IProcessRagfairTradeRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBaseTradeRequestData } from "../@types/eft/trade/IProcessBaseTradeRequestData";
export declare class TradeCallbacks {
    private tradeController;
    constructor(tradeController: TradeController);
    processTrade(pmcData: IPmcData, body: IProcessBaseTradeRequestData, sessionID: string): IItemEventRouterResponse;
    processRagfairTrade(pmcData: IPmcData, body: IProcessRagfairTradeRequestData, sessionID: string): IItemEventRouterResponse;
}
