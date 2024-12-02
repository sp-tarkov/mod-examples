import { inject, injectAll, injectable } from "tsyringe";

import { AbstractDialogueChatBot } from "@spt/helpers/Dialogue/AbstractDialogueChatBot";
import { IChatCommand } from "@spt/helpers/Dialogue/Commando/IChatCommand";
import { IUserDialogInfo } from "@spt/models/eft/profile/ISptProfile";
import { MemberCategory } from "@spt/models/enums/MemberCategory";
import { ILogger } from "@spt/models/spt/utils/ILogger";
import { MailSendService } from "@spt/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class CustomSimpleChatBot extends AbstractDialogueChatBot {
    constructor(
        @inject("WinstonLogger") logger: ILogger,
        @inject("MailSendService") mailSendService: MailSendService,
        // Remember to replace MyCommand for something unique to your mod!
        // otherwise these dependencies could get wired for some other mod
        // using the same name!
        @injectAll("MyCommand") chatCommands: IChatCommand[],
    ) {
        super(logger, mailSendService, chatCommands);
    }

    public getChatBot(): IUserDialogInfo {
        return {
            _id: "674db14ed849a3727ef24da0", // REQUIRES a valid monogo_id, use online generator to create one
            aid: 1234567,
            Info: {
                Level: 1,
                MemberCategory: MemberCategory.SHERPA,
                SelectedMemberCategory: MemberCategory.SHERPA,
                Nickname: "CoolAbstractChatBot",
                Side: "Usec",
            },
        };
    }

    protected getUnrecognizedCommandMessage(): string {
        return "No clue what you are talking about bud!";
    }
}
