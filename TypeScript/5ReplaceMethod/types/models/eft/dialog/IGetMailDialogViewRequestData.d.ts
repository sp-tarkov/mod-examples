import { MessageType } from "../profile/IAkiProfile";
export interface IGetMailDialogViewRequestData {
    type: MessageType;
    dialogId: string;
    limit: number;
    time: number;
}
