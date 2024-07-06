import { inject, injectable } from "tsyringe";

import { IChatCommand } from "@spt-aki/helpers/Dialogue/Commando/IChatCommand";
import { ISendMessageRequest } from "@spt-aki/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt-aki/models/eft/profile/IAkiProfile";
import { MailSendService } from "@spt-aki/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class MyCoolCommand implements IChatCommand
{
    constructor(
        @inject("MailSendService") protected mailSendService: MailSendService,
    )
    {}

    public getCommandPrefix(): string
    {
        return "example";
    }

    public getCommandHelp(command: string): string
    {
        if (command === "test")
        {
            return "Usage: example test";
        }
    }

    public getCommands(): Set<string>
    {
        return new Set<string>(["test"]);
    }

    public handle(command: string, commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string
    {
        if (command === "test")
        {
            this.mailSendService.sendUserMessageToPlayer(sessionId, commandHandler, `This is a test message shown as an example!`);
            return request.dialogId;
        }
    }
}
