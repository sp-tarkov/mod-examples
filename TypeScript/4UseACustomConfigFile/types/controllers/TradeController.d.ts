import { RagfairServer } from "../servers/RagfairServer";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { TradeHelper } from "../helpers/TradeHelper";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IProcessRagfairTradeRequestData } from "../@types/eft/trade/IProcessRagfairTradeRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { Upd } from "../@types/eft/common/tables/IItem";
import { IProcessBaseTradeRequestData } from "../@types/eft/trade/IProcessBaseTradeRequestData";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ILogger } from "../@types/spt/utils/ILogger";
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
