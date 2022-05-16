import { SaveServer } from "../servers/SaveServer";
import { DialogueHelper } from "../helpers/DialogueHelper";
import { DialogueInfo } from "../@types/eft/profile/IAkiProfile";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { IGetFriendListDataResponse } from "../@types/eft/dialog/IGetFriendListDataResponse";
import { IGetMailDialogViewResponseData } from "../@types/eft/dialog/IGetMailDialogViewResponseData";
import { IGetAllAttachmentsResponse } from "../@types/eft/dialog/IGetAllAttachmentsResponse";
import { HttpResponse } from "../utils/HttpResponse";
export declare class DialogueController {
    private httpResponse;
    private saveServer;
    private dialogueHelper;
    constructor(httpResponse: HttpResponse, saveServer: SaveServer, dialogueHelper: DialogueHelper);
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
