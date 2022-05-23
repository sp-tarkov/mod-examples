import { SaveServer } from "../servers/SaveServer";
import { DialogueHelper } from "../helpers/DialogueHelper";
import { DialogueInfo } from "../models/eft/profile/IAkiProfile";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { IGetFriendListDataResponse } from "../models/eft/dialog/IGetFriendListDataResponse";
import { IGetMailDialogViewResponseData } from "../models/eft/dialog/IGetMailDialogViewResponseData";
import { IGetAllAttachmentsResponse } from "../models/eft/dialog/IGetAllAttachmentsResponse";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class DialogueController {
    private httpResponse;
    private saveServer;
    private dialogueHelper;
    constructor(httpResponse: HttpResponseUtil, saveServer: SaveServer, dialogueHelper: DialogueHelper);
    getFriendList(sessionID: string): IGetFriendListDataResponse;
    generateDialogueList(sessionID: string): IGetBodyResponseData<DialogueInfo[]>;
    getDialogueInfo(dialogueID: string, sessionID: string): DialogueInfo;
    generateDialogueView(dialogueID: string, sessionID: string): IGetMailDialogViewResponseData;
    removeDialogue(dialogueID: string, sessionID: string): void;
    setDialoguePin(dialogueID: string, shouldPin: boolean, sessionID: string): void;
    setRead(dialogueIDs: string[], sessionID: string): void;
    getAllAttachments(dialogueID: string, sessionID: string): IGetAllAttachmentsResponse;
    private removeExpiredItems;
    update(): void;
}
