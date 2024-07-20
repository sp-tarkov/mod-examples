import { inject, injectable } from "tsyringe";

import { IChatCommand } from "@spt/helpers/Dialogue/Commando/IChatCommand";
import { ISendMessageRequest } from "@spt/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt/models/eft/profile/ISptProfile";
import { MailSendService } from "@spt/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class MyCoolCommand implements IChatCommand {
    constructor(
        @inject("MailSendService") protected mailSendService: MailSendService,
    ) { }

    public getCommandPrefix(): string {
        return "example";
    }

    public getCommandHelp(command: string): string {
        if (command === "test") {
            return "Usage: example test";
        }
    }

    public getCommands(): Set<string> {
        return new Set<string>(["test"]);
    }

    public handle(command: string, commandHandler: IUserDialogInfo, sessionId: string, request: ISendMessageRequest): string {
        if (command === "test") {
            this.mailSendService.sendUserMessageToPlayer(sessionId, commandHandler, `This is a test message shown as an example!`);
            return request.dialogId;
        }
    }
}
