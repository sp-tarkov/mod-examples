import { ISptCommand } from "@spt-aki/helpers/Dialogue/Commando/SptCommands/ISptCommand";
import { ItemHelper } from "@spt-aki/helpers/ItemHelper";
import { MailSendService } from "@spt-aki/services/MailSendService";
import { ISendMessageRequest } from "@spt-aki/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt-aki/models/eft/profile/IAkiProfile";
import { inject, injectable } from "tsyringe";

@injectable()
export class CustomAkiCommand implements ISptCommand
{
    public constructor(
        @inject("ItemHelper") protected itemHelper: ItemHelper,
        @inject("MailSendService") protected mailSendService: MailSendService,
    )
    {
    }

    public getCommand(): string
    {
        return "getName";
    }

    public getCommandHelp(): string
    {
        return "Usage: spt getName tplId"
    }

    public performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string
    {
        const splitCommand = request.text.split(" ");
        this.mailSendService.sendUserMessageToPlayer(sessionId, commandHandler, `That templateId belongs to item ${this.itemHelper.getItem(splitCommand[2])[1]?._props?.Name ?? ""}`);
        return request.dialogId;
    }
}
