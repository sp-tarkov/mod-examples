import { Dialogue, MessageContent, MessagePreview } from "../models/eft/profile/IAkiProfile";
import { MessageType } from "../models/enums/MessageType";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { HashUtil } from "../utils/HashUtil";
import { ItemHelper } from "./ItemHelper";
import { NotificationSendHelper } from "./NotificationSendHelper";
import { NotifierHelper } from "./NotifierHelper";
export declare class DialogueHelper {
    protected hashUtil: HashUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected notifierHelper: NotifierHelper;
    protected notificationSendHelper: NotificationSendHelper;
    protected itemHelper: ItemHelper;
    constructor(hashUtil: HashUtil, saveServer: SaveServer, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, notificationSendHelper: NotificationSendHelper, itemHelper: ItemHelper);
    createMessageContext(templateId: string, messageType: MessageType, maxStoreTime: number): MessageContent;
    addDialogueMessage(dialogueID: string, messageContent: MessageContent, sessionID: string, rewards?: any[]): void;
    getMessagePreview(dialogue: Dialogue): MessagePreview;
    getMessageItemContents(messageID: string, sessionID: string): any[];
}
