import { inject, injectable } from "tsyringe";

import { IChatCommand } from "@spt/helpers/Dialogue/Commando/IChatCommand";
import { ISendMessageRequest } from "@spt/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt/models/eft/profile/ISptProfile";
import { MailSendService } from "@spt/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class AnotherCoolCommand implements IChatCommand
{
    constructor(
        @inject("MailSendService") protected mailSendService: MailSendService,
    )
    {}

    public getCommandPrefix(): string
    {
        return "anotherExample";
    }

    public getCommandHelp(command: string): string
    {
        if (command === "test")
        {
            return "Usage: anotherExample test";
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
            this.mailSendService.sendUserMessageToPlayer(sessionId, commandHandler, `This is another test message shown as a different example!`);
            return request.dialogId;
        }
    }
}
