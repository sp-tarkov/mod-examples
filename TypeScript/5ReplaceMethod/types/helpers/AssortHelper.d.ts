import { IPmcData } from "../@types/eft/common/IPmcData";
import { ITraderAssort } from "../@types/eft/common/tables/ITrader";
import { ILogger } from "../@types/spt/utils/ILogger";
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
