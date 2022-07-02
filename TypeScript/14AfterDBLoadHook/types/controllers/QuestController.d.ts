import { DialogueHelper } from "../helpers/DialogueHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { QuestConditionHelper } from "../helpers/QuestConditionHelper";
import { QuestHelper } from "../helpers/QuestHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IQuest, Reward } from "../models/eft/common/tables/IQuest";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IAcceptQuestRequestData } from "../models/eft/quests/IAcceptQuestRequestData";
import { ICompleteQuestRequestData } from "../models/eft/quests/ICompleteQuestRequestData";
import { IHandoverQuestRequestData } from "../models/eft/quests/IHandoverQuestRequestData";
import { IQuestConfig } from "../models/spt/config/IQuestConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocaleService } from "../services/LocaleService";
import { PlayerService } from "../services/PlayerService";
import { TimeUtil } from "../utils/TimeUtil";
export declare class QuestController {
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected itemEventRouter: ItemEventRouter;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected dialogueHelper: DialogueHelper;
    protected profileHelper: ProfileHelper;
    protected questHelper: QuestHelper;
    protected questConditionHelper: QuestConditionHelper;
    protected playerService: PlayerService;
    protected localeService: LocaleService;
    protected configServer: ConfigServer;
    protected questConfig: IQuestConfig;
    constructor(logger: ILogger, timeUtil: TimeUtil, itemEventRouter: ItemEventRouter, databaseServer: DatabaseServer, itemHelper: ItemHelper, dialogueHelper: DialogueHelper, profileHelper: ProfileHelper, questHelper: QuestHelper, questConditionHelper: QuestConditionHelper, playerService: PlayerService, localeService: LocaleService, configServer: ConfigServer);
    /**
     * Get all quests visible to player
     * Exclude quests with incomplete preconditions (level/loyalty)
     * @param sessionID session id
     * @returns array of IQuest
     */
    getClientQuests(sessionID: string): IQuest[];
    acceptQuest(pmcData: IPmcData, acceptedQuest: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    acceptRepeatableQuest(pmcData: IPmcData, acceptedQuest: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Remove completed quest from profile
     * Add newly unlocked quests to profile
     * Also recalculate thier level due to exp rewards
     * @param pmcData Player profile
     * @param body completed quest request
     * @param sessionID session id
     * @returns ItemEvent response
     */
    completeQuest(pmcData: IPmcData, body: ICompleteQuestRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Send a popup to player on completion of a quest
     * @param sessionID session id
     * @param pmcData player profile
     * @param completedQuestId completed quest id
     * @param questRewards rewards given to player
     */
    protected sendDialogMessageOnQuestComplete(sessionID: string, pmcData: IPmcData, completedQuestId: string, questRewards: Reward[]): void;
    /**
     * Returns a list of quests that should be failed when a quest is completed
     * @param completedQuestId quest completed id
     * @returns array of quests
     */
    protected getQuestsFailedByCompletingQuest(completedQuestId: string): IQuest[];
    /**
     * Fail the quests provided
     * @param sessionID session id
     * @param pmcData player profile
     * @param questsToFail quests to fail
     */
    protected failQuests(sessionID: string, pmcData: IPmcData, questsToFail: IQuest[]): void;
    handoverQuest(pmcData: IPmcData, body: IHandoverQuestRequestData, sessionID: string): IItemEventRouterResponse;
}
