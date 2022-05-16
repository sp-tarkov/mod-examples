import { MessageType } from "../profile/IAkiProfile";
export interface ISendMessageRequest {
    dialogId: string;
    type: MessageType;
    text: string;
    replyTo: string;
}
