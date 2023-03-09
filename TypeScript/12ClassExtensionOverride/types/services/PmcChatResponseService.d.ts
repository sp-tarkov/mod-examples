import { NotificationSendHelper } from "../helpers/NotificationSendHelper";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { Victim } from "../models/eft/common/tables/IBotBase";
import { IUserDialogInfo } from "../models/eft/profile/IAkiProfile";
import { IPmcChatResponse } from "../models/spt/config/IPmChatResponse";
import { ConfigServer } from "../servers/ConfigServer";
import { RandomUtil } from "../utils/RandomUtil";
import { LocalisationService } from "./LocalisationService";
export declare class PmcChatResponseService {
    protected randomUtil: RandomUtil;
    protected notificationSendHelper: NotificationSendHelper;
    protected localisationService: LocalisationService;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected configServer: ConfigServer;
    protected pmcResponsesConfig: IPmcChatResponse;
    constructor(randomUtil: RandomUtil, notificationSendHelper: NotificationSendHelper, localisationService: LocalisationService, weightedRandomHelper: WeightedRandomHelper, configServer: ConfigServer);
    /**
     * Chooses a random victim from those provided and sends a message to the player, can be positive or negative
     * @param sessionId Session id
     * @param pmcVictims Array of bots killed by player
     */
    sendVictimResponse(sessionId: string, pmcVictims: Victim[]): void;
    /**
     * Not fully implemented yet, needs method of acquiring killers details after raid
     * @param sessionId Session id
     * @param pmcData Players profile
     */
    sendKillerResponse(sessionId: string, pmcData: IPmcData): void;
    /**
     * Choose a localised message to send the player (different if sender was killed or killed player)
     * @param isVictim
     * @returns
     */
    protected chooseMessage(isVictim: boolean): string;
    /**
     * Should capitalisation be stripped from the message response before sending
     * @param isVictim Was responder a victim of player
     * @returns true = should be stripped
     */
    protected stripCapitalistion(isVictim: boolean): boolean;
    /**
     * Should capitalisation be stripped from the message response before sending
     * @param isVictim Was responder a victim of player
     * @returns true = should be stripped
     */
    protected allCaps(isVictim: boolean): boolean;
    /**
     * Should the word 'bro' be appended to the message being sent to player
     * @param isVictim Was responder a victim of player
     * @returns true = should be stripped
     */
    appendBroToMessageEnd(isVictim: boolean): boolean;
    /**
     * Choose a type of response based on the weightings in pmc response config
     * @param isVictim Was responder killed by player
     * @returns Response type (positive/negative)
     */
    protected chooseResponseType(isVictim?: boolean): string;
    /**
     * Get locale keys related to the type of response to send (victim/killer)
     * @param keyType Positive/negative
     * @param isVictim Was responder killed by player
     * @returns
     */
    protected getResponseLocaleKeys(keyType: string, isVictim?: boolean): string[];
    /**
     * Randomly draw a victim of the the array and return thier details
     * @param pmcVictims Possible victims to choose from
     * @returns IUserDialogInfo
     */
    protected chooseRandomVictim(pmcVictims: Victim[]): IUserDialogInfo;
}
