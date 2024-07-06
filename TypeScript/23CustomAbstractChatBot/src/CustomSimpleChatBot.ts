import { inject, injectAll, injectable } from "tsyringe";

import { AbstractDialogueChatBot } from "@spt-aki/helpers/Dialogue/AbstractDialogueChatBot";
import { IChatCommand } from "@spt-aki/helpers/Dialogue/Commando/IChatCommand";
import { IUserDialogInfo } from "@spt-aki/models/eft/profile/IAkiProfile";
import { MemberCategory } from "@spt-aki/models/enums/MemberCategory";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { MailSendService } from "@spt-aki/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class CustomSimpleChatBot extends AbstractDialogueChatBot
{
    constructor(
        @inject("WinstonLogger") logger: ILogger,
        @inject("MailSendService") mailSendService: MailSendService,
        // Remember to replace MyCommand for something unique to your mod!
        // otherwise these dependencies could get wired for some other mod
        // using the same name!
        @injectAll("MyCommand") chatCommands: IChatCommand[],
    )
    {
        super(logger, mailSendService, chatCommands);
    }

    public getChatBot(): IUserDialogInfo
    {
        return {
            _id: "modderAbstractBot",
            info: {
                Level: 1,
                MemberCategory: MemberCategory.SHERPA,
                Nickname: "CoolAbstractChatBot",
                Side: "Usec",
            },
        };
    }

    protected getUnrecognizedCommandMessage(): string
    {
        return "No clue what you are talking about bud!";
    }
}
