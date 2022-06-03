import { IPmcData } from "../models/eft/common/IPmcData";
import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ItemHelper } from "./ItemHelper";
import { QuestHelper } from "./QuestHelper";
export declare class AssortHelper {
    private logger;
    private itemHelper;
    private databaseServer;
    private questHelper;
    constructor(logger: ILogger, itemHelper: ItemHelper, databaseServer: DatabaseServer, questHelper: QuestHelper);
    removeItemFromAssort(assort: ITraderAssort, itemID: string): ITraderAssort;
    stripQuestAssort(pmcProfile: IPmcData, sessionId: string, traderId: string, assort: ITraderAssort): ITraderAssort;
    stripLoyaltyAssort(pmcProfile: IPmcData, sessionId: string, traderId: string, assort: ITraderAssort): ITraderAssort;
}
