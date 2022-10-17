import { IPmcData } from "../models/eft/common/IPmcData";
import { AvailableForConditions, AvailableForProps, IQuest, Reward } from "../models/eft/common/tables/IQuest";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IAcceptQuestRequestData } from "../models/eft/quests/IAcceptQuestRequestData";
import { ICompleteQuestRequestData } from "../models/eft/quests/ICompleteQuestRequestData";
import { QuestStatus } from "../models/enums/QuestStatus";
import { IQuestConfig } from "../models/spt/config/IQuestConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { EventOutputHolder } from "../routers/EventOutputHolder";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocaleService } from "../services/LocaleService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { DialogueHelper } from "./DialogueHelper";
import { ItemHelper } from "./ItemHelper";
import { PaymentHelper } from "./PaymentHelper";
import { ProfileHelper } from "./ProfileHelper";
import { RagfairServerHelper } from "./RagfairServerHelper";
import { TraderHelper } from "./TraderHelper";
export declare class QuestHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected timeUtil: TimeUtil;
    protected hashUtil: HashUtil;
    protected itemHelper: ItemHelper;
    protected eventOutputHolder: EventOutputHolder;
    protected databaseServer: DatabaseServer;
    protected localeService: LocaleService;
    protected ragfairServerHelper: RagfairServerHelper;
    protected dialogueHelper: DialogueHelper;
    protected profileHelper: ProfileHelper;
    protected paymentHelper: PaymentHelper;
    protected traderHelper: TraderHelper;
    protected configServer: ConfigServer;
    protected questConfig: IQuestConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, timeUtil: TimeUtil, hashUtil: HashUtil, itemHelper: ItemHelper, eventOutputHolder: EventOutputHolder, databaseServer: DatabaseServer, localeService: LocaleService, ragfairServerHelper: RagfairServerHelper, dialogueHelper: DialogueHelper, profileHelper: ProfileHelper, paymentHelper: PaymentHelper, traderHelper: TraderHelper, configServer: ConfigServer);
    /**
    * Get status of a quest by quest id
    * @param pmcData Profile to search
    * @param questID Quest id to look up
    * @returns QuestStauts enum
    */
    getQuestStatus(pmcData: IPmcData, questID: string): QuestStatus;
    /**
     * returns true is the level condition is satisfied
     * @param playerLevel Players level
     * @param condition Quest condition
     * @returns true if player level is greater than or equal to quest
     */
    doesPlayerLevelFulfilCondition(playerLevel: number, condition: AvailableForConditions): boolean;
    getDeltaQuests(before: IQuest[], after: IQuest[]): IQuest[];
    /**
     * Increase skill points of a skill on player profile
     * @param sessionID Session id
     * @param pmcData Player profile
     * @param output output object to send back to client
     * @param skillName Name of skill to increase skill points of
     * @param progressAmount Amount of skill points to add to skill
     */
    rewardSkillPoints(sessionID: string, pmcData: IPmcData, output: IItemEventRouterResponse, skillName: string, progressAmount: number): void;
    getQuestLocale(questId: string): any;
    /**
     * Debug Routine for showing some information on the
     * quest list in question.
     */
    dumpQuests(quests: any): void;
    loyaltyRequirementCheck(loyaltyRequirementProperties: AvailableForProps, profile: IPmcData): boolean;
    protected processReward(reward: Reward): any[];
    getQuestRewardItems(quest: IQuest, state: QuestStatus): Reward[];
    /**
     * Add quest with new state value to pmc profile
     * @param pmcData profile to add quest to
     * @param newState state the new quest should be in when added
     * @param acceptedQuest Details of quest being added
     */
    addQuestToPMCData(pmcData: IPmcData, newState: QuestStatus, acceptedQuest: IAcceptQuestRequestData): void;
    acceptedUnlocked(acceptedQuestId: string, sessionID: string): IQuest[];
    failedUnlocked(failedQuestId: string, sessionID: string): IQuest[];
    applyMoneyBoost(quest: IQuest, moneyBoost: number): IQuest;
    changeItemStack(pmcData: IPmcData, id: string, value: number, sessionID: string, output: any): void;
    /**
     * Get List of All Quests as an array
     * @returns Array of IQuest objects
     */
    questValues(): IQuest[];
    /**
     * Reest AvailableForStart conditions for quests
     * @param quests queststo clean
     * @returns quest array without conditions
     */
    protected cleanQuestList(quests: IQuest[]): IQuest[];
    /**
     * Reset AvailableForStart conditions on a quest
     * @param quest quest to clean
     * @returns reset IQuest object
     */
    cleanQuestConditions(quest: IQuest): IQuest;
    failQuest(pmcData: IPmcData, body: any, sessionID: string): any;
    /**
     * Get quest by id from database
     * @param questId questid to look for
     * @param pmcData player profile
     * @returns IQuest object
     */
    getQuestFromDb(questId: string, pmcData: IPmcData): IQuest;
    getQuestLocaleIdFromDb(messageId: string): string;
    /**
     * Alter a quests state + Add a record to tis status timers object
     * @param pmcData Profile to update
     * @param newQuestState new state the qeust should be in
     * @param questId id of the quest to alter the status of
     */
    updateQuestState(pmcData: IPmcData, newQuestState: QuestStatus, questId: string): void;
    /**
     * Give player quest rewards - Skills/exp/trader standing/items/assort unlocks
     * @param pmcData Player profile
     * @param body complete quest request
     * @param state State of the quest now its complete
     * @param sessionID Seession id
     * @returns array of reward objects
     */
    applyQuestReward(pmcData: IPmcData, body: ICompleteQuestRequestData, state: QuestStatus, sessionID: string): Reward[];
    /**
     * Get the intel center bonus a player has
     * @param pmcData player profile
     * @returns bonus in percent
     */
    protected getIntelCenterRewardBonus(pmcData: IPmcData): number;
    getFindItemIdForQuestItem(itemTpl: string): string;
}
