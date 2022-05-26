import { RagfairServer } from "../servers/RagfairServer";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { TradeHelper } from "../helpers/TradeHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IProcessRagfairTradeRequestData } from "../models/eft/trade/IProcessRagfairTradeRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { Upd } from "../models/eft/common/tables/IItem";
import { IProcessBaseTradeRequestData } from "../models/eft/trade/IProcessBaseTradeRequestData";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../models/spt/utils/ILogger";
declare class TradeController {
    private logger;
    private itemEventRouter;
    private tradeHelper;
    private profileHelper;
    private ragfairServer;
    constructor(logger: ILogger, itemEventRouter: ItemEventRouter, tradeHelper: TradeHelper, profileHelper: ProfileHelper, ragfairServer: RagfairServer);
    confirmTrading(pmcData: IPmcData, body: IProcessBaseTradeRequestData, sessionID: string, foundInRaid?: boolean, upd?: Upd): IItemEventRouterResponse;
    confirmRagfairTrading(pmcData: IPmcData, body: IProcessRagfairTradeRequestData, sessionID: string): IItemEventRouterResponse;
}
export { TradeController };
