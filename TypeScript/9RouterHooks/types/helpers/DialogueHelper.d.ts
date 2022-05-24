import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { ItemHelper } from "./ItemHelper";
import { Dialogue, MessageContent, MessagePreview, MessageType } from "../models/eft/profile/IAkiProfile";
import { HashUtil } from "../utils/HashUtil";
import { NotifierHelper } from "./NotifierHelper";
import { NotificationSendHelper } from "./NotificationSendHelper";
export declare class DialogueHelper {
    private hashUtil;
    private saveServer;
    private databaseServer;
    private notifierHelper;
    private notificationSendHelper;
    private itemHelper;
    constructor(hashUtil: HashUtil, saveServer: SaveServer, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, notificationSendHelper: NotificationSendHelper, itemHelper: ItemHelper);
    createMessageContext(templateId: string, messageType: MessageType, maxStoreTime: number): MessageContent;
    addDialogueMessage(dialogueID: string, messageContent: MessageContent, sessionID: string, rewards?: any[]): void;
    getMessagePreview(dialogue: Dialogue): MessagePreview;
    getMessageItemContents(messageID: string, sessionID: string): any[];
}
