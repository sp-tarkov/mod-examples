import { InventoryHelper } from "../helpers/InventoryHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { Item, Upd } from "../models/eft/common/tables/IItem";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IProcessBuyTradeRequestData } from "../models/eft/trade/IProcessBuyTradeRequestData";
import { IProcessSellTradeRequestData } from "../models/eft/trade/IProcessSellTradeRequestData";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { RagfairServer } from "../servers/RagfairServer";
import { FenceService } from "../services/FenceService";
import { PaymentService } from "../services/PaymentService";
export declare class TradeHelper {
    protected logger: ILogger;
    protected itemEventRouter: ItemEventRouter;
    protected traderHelper: TraderHelper;
    protected itemHelper: ItemHelper;
    protected paymentService: PaymentService;
    protected fenceService: FenceService;
    protected inventoryHelper: InventoryHelper;
    protected ragfairServer: RagfairServer;
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
    protected incrementAssortBuyCount(assortBeingPurchased: Item, itemsPurchasedCount: number): void;
    protected checkPurchaseIsWithinTraderItemLimit(assortBeingPurchased: Item, assortId: string, count: number): void;
}
