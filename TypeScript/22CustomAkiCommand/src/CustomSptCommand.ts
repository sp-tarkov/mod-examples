import { inject, injectable } from "tsyringe";

import { ISptCommand } from "@spt/helpers/Dialogue/Commando/SptCommands/ISptCommand";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { MailSendService } from "@spt/services/MailSendService";
import { ISendMessageRequest } from "@spt/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt/models/eft/profile/ISptProfile";

//    \/   dont forger this annotation here!
@injectable()
export class CustomSptCommand implements ISptCommand
{
    constructor(
        @inject("ItemHelper") protected itemHelper: ItemHelper,
        @inject("MailSendService") protected mailSendService: MailSendService,
    )
    {}

    public getCommand(): string
    {
        return "getName";
    }

    public getCommandHelp(): string
    {
        return "Usage: spt getName tplId";
    }

    public performAction(commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string
    {
        const splitCommand = request.text.split(" ");
        this.mailSendService.sendUserMessageToPlayer(sessionId, commandHandler, `That templateId belongs to item ${this.itemHelper.getItem(splitCommand[2])[1]?._props?.Name ?? ""}`);
        return request.dialogId;
    }
}
