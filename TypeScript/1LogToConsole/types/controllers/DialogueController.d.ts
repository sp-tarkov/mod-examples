import { DialogueHelper } from "../helpers/DialogueHelper";
import { IGetAllAttachmentsResponse } from "../models/eft/dialog/IGetAllAttachmentsResponse";
import { IGetFriendListDataResponse } from "../models/eft/dialog/IGetFriendListDataResponse";
import { IGetMailDialogViewRequestData } from "../models/eft/dialog/IGetMailDialogViewRequestData";
import { IGetMailDialogViewResponseData } from "../models/eft/dialog/IGetMailDialogViewResponseData";
import { ISendMessageRequest } from "../models/eft/dialog/ISendMessageRequest";
import { Dialogue, DialogueInfo, IAkiProfile, IUserDialogInfo, Message } from "../models/eft/profile/IAkiProfile";
import { MessageType } from "../models/enums/MessageType";
import { ILogger } from "../models/spt/utils/ILogger";
import { SaveServer } from "../servers/SaveServer";
import { GiftService } from "../services/GiftService";
import { MailSendService } from "../services/MailSendService";
import { HashUtil } from "../utils/HashUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class DialogueController {
    protected logger: ILogger;
    protected saveServer: SaveServer;
    protected timeUtil: TimeUtil;
    protected dialogueHelper: DialogueHelper;
    protected mailSendService: MailSendService;
    protected giftService: GiftService;
    protected hashUtil: HashUtil;
    constructor(logger: ILogger, saveServer: SaveServer, timeUtil: TimeUtil, dialogueHelper: DialogueHelper, mailSendService: MailSendService, giftService: GiftService, hashUtil: HashUtil);
    /** Handle onUpdate spt event */
    update(): void;
    /**
     * Handle client/friend/list
     * @returns IGetFriendListDataResponse
     */
    getFriendList(sessionID: string): IGetFriendListDataResponse;
    /**
     * Handle client/mail/dialog/list
     * Create array holding trader dialogs and mail interactions with player
     * Set the content of the dialogue on the list tab.
     * @param sessionID Session Id
     * @returns array of dialogs
     */
    generateDialogueList(sessionID: string): DialogueInfo[];
    /**
     * Get the content of a dialogue
     * @param dialogueID Dialog id
     * @param sessionID Session Id
     * @returns DialogueInfo
     */
    getDialogueInfo(dialogueID: string, sessionID: string): DialogueInfo;
    /**
     *  Get the users involved in a dialog (player + other party)
     * @param dialog The dialog to check for users
     * @param messageType What type of message is being sent
     * @param sessionID Player id
     * @returns IUserDialogInfo array
     */
    getDialogueUsers(dialog: Dialogue, messageType: MessageType, sessionID: string): IUserDialogInfo[];
    /**
     * Handle client/mail/dialog/view
     * Handle player clicking 'messenger' and seeing all the messages they've recieved
     * Set the content of the dialogue on the details panel, showing all the messages
     * for the specified dialogue.
     * @param request Get dialog request
     * @param sessionId Session id
     * @returns IGetMailDialogViewResponseData object
     */
    generateDialogueView(request: IGetMailDialogViewRequestData, sessionId: string): IGetMailDialogViewResponseData;
    /**
     * Get dialog from player profile, create if doesn't exist
     * @param profile Player profile
     * @param request get dialog request (params used when dialog doesnt exist in profile)
     * @returns Dialogue
     */
    protected getDialogByIdFromProfile(profile: IAkiProfile, request: IGetMailDialogViewRequestData): Dialogue;
    /**
     *  Get the users involved in a mail between two entities
     * @param fullProfile Player profile
     * @param dialogUsers The participants of the mail
     * @returns IUserDialogInfo array
     */
    protected getProfilesForMail(fullProfile: IAkiProfile, dialogUsers: IUserDialogInfo[]): IUserDialogInfo[];
    /**
     * Get a count of messages with attachments from a particular dialog
     * @param sessionID Session id
     * @param dialogueID Dialog id
     * @returns Count of messages with attachments
     */
    protected getUnreadMessagesWithAttachmentsCount(sessionID: string, dialogueID: string): number;
    /**
     * Does array have messages with uncollected rewards (includes expired rewards)
     * @param messages Messages to check
     * @returns true if uncollected rewards found
     */
    protected messagesHaveUncollectedRewards(messages: Message[]): boolean;
    /** Handle client/mail/dialog/remove */
    removeDialogue(dialogueID: string, sessionID: string): void;
    setDialoguePin(dialogueID: string, shouldPin: boolean, sessionID: string): void;
    /** Handle client/mail/dialog/read */
    setRead(dialogueIDs: string[], sessionID: string): void;
    /**
     * Handle client/mail/dialog/getAllAttachments
     * Get all uncollected items attached to mail in a particular dialog
     * @param dialogueID Dialog to get mail attachments from
     * @param sessionID Session id
     * @returns
     */
    getAllAttachments(dialogueID: string, sessionID: string): IGetAllAttachmentsResponse;
    /** client/mail/msg/send */
    sendMessage(sessionId: string, request: ISendMessageRequest): string;
    protected handleChatWithSPTFriend(sessionId: string, request: ISendMessageRequest): void;
    protected getSptFriendData(friendId?: string): IUserDialogInfo;
    /**
     * Get messages from a specific dialog that have items not expired
     * @param sessionId Session id
     * @param dialogueId Dialog to get mail attachments from
     * @returns Message array
     */
    protected getActiveMessagesFromDialog(sessionId: string, dialogueId: string): Message[];
    /**
     * Return array of messages with uncollected items (includes expired)
     * @param messages Messages to parse
     * @returns messages with items to collect
     */
    protected getMessagesWithAttachments(messages: Message[]): Message[];
    /**
     * Delete expired items from all messages in player profile. triggers when updating traders.
     * @param sessionId Session id
     */
    protected removeExpiredItemsFromMessages(sessionId: string): void;
    /**
     * Removes expired items from a message in player profile
     * @param sessionId Session id
     * @param dialogueId Dialog id
     */
    protected removeExpiredItemsFromMessage(sessionId: string, dialogueId: string): void;
    /**
     * Has a dialog message expired
     * @param message Message to check expiry of
     * @returns true or false
     */
    protected messageHasExpired(message: Message): boolean;
}
