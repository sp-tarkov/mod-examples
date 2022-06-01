import { InventoryHelper } from "../helpers/InventoryHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { Upd } from "../models/eft/common/tables/IItem";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBuyTradeRequestData } from "../models/eft/trade/IProcessBuyTradeRequestData";
import { IProcessSellTradeRequestData } from "../models/eft/trade/IProcessSellTradeRequestData";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { RagfairServer } from "../servers/RagfairServer";
import { FenceService } from "../services/FenceService";
import { PaymentService } from "../services/PaymentService";
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
    /**
     * Buy item from flea or trader
     * @param pmcData
     * @param buyRequestData data from client
     * @param sessionID
     * @param foundInRaid
     * @param upd optional item details used when buying from flea
     * @returns
     */
    buyItem(pmcData: IPmcData, buyRequestData: IProcessBuyTradeRequestData, sessionID: string, foundInRaid: boolean, upd: Upd): IItemEventRouterResponse;
    /**
     * Sell item to trader
     * @param pmcData
     * @param body
     * @param sessionID
     * @returns
     */
    sellItem(pmcData: IPmcData, body: IProcessSellTradeRequestData, sessionID: string): IItemEventRouterResponse;
    private incrementAssortBuyCount;
    private checkPurchaseIsWithinTraderItemLimit;
}
