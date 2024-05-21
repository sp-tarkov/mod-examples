import { inject, injectable } from "tsyringe";

import { IChatCommand } from "@spt-aki/helpers/Dialogue/Commando/IChatCommand";
import { ISendMessageRequest } from "@spt-aki/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt-aki/models/eft/profile/IAkiProfile";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { MailSendService } from "@spt-aki/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class CustomCommandoCommand implements IChatCommand
{
    constructor(
        @inject("MailSendService") protected mailSendService: MailSendService,
        @inject("DatabaseServer") protected databaseServer: DatabaseServer,
    )
    {}

    public getCommandPrefix(): string
    {
        return "test";
    }

    public getCommandHelp(command: string): string
    {
        if (command === "talk")
        {
            return "Usage: test talk";
        }
    }

    public getCommands(): Set<string>
    {
        return new Set<string>(["talk"]);
    }

    public handle(command:string, commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string
    {
        if (command === "talk")
        {
            this.mailSendService.sendUserMessageToPlayer(sessionId, commandHandler, `IM TALKING! OKAY?!\nHere's the walk speed X config from the DB: ${this.databaseServer.getTables().globals.config.WalkSpeed.x}`);
            return request.dialogId;
        }
    }
}
