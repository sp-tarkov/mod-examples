import { RagfairServer } from "../servers/RagfairServer";
import { InventoryHelper } from "../helpers/InventoryHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { FenceService } from "../services/FenceService";
import { PaymentService } from "../services/PaymentService";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IProcessBuyTradeRequestData } from "../@types/eft/trade/IProcessBuyTradeRequestData";
import { IProcessSellTradeRequestData } from "../@types/eft/trade/IProcessSellTradeRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { Upd } from "../@types/eft/common/tables/IItem";
import { ItemHelper } from "../helpers/ItemHelper";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class TradeHelper {
    private logger;
    private itemEventRouter;
    private traderHelper;
    private itemHelper;
    private paymentService;
    private fenceService;
    private inventoryHelper;
    private ragfairServer;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, traderHelper: TraderHelper, itemHelper: ItemHelper, paymentService: PaymentService, fenceService: FenceService, inventoryHelper: InventoryHelper, ragfairServer: RagfairServer);
    buyItem(pmcData: IPmcData, buyRequestData: IProcessBuyTradeRequestData, sessionID: string, foundInRaid: boolean, upd: Upd): IItemEventRouterResponse;
    /**
     * Selling item to trader
     */
    sellItem(pmcData: IPmcData, body: IProcessSellTradeRequestData, sessionID: string): IItemEventRouterResponse;
    private incrementAssortBuyCount;
    private checkPurchaseIsWithinTraderItemLimit;
}
