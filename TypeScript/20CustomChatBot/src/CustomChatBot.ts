import { inject, injectable } from "tsyringe";

import { IDialogueChatBot } from "@spt/helpers/Dialogue/IDialogueChatBot";
import { ISendMessageRequest } from "@spt/models/eft/dialog/ISendMessageRequest";
import { IUserDialogInfo } from "@spt/models/eft/profile/IAkiProfile";
import { MemberCategory } from "@spt/models/enums/MemberCategory";
import { MailSendService } from "@spt/services/MailSendService";

//    \/   dont forger this annotation here!
@injectable()
export class CustomChatBot implements IDialogueChatBot
{
    constructor(
        @inject("MailSendService") protected mailSendService: MailSendService,
    )
    {}

    public getChatBot(): IUserDialogInfo
    {
        return {
            _id: "modderBuddy",
            aid: 9999999,
            Info: {
                Level: 1,
                MemberCategory: MemberCategory.SHERPA,
                Nickname: "Buddy",
                Side: "Usec",
            },
        };
    }

    public handleMessage(sessionId: string, request: ISendMessageRequest): string
    {
        this.mailSendService.sendUserMessageToPlayer(
            sessionId,
            this.getChatBot(),
            `Im buddy! I just reply back what you typed to me!:\n${request.text}`,
        );
        return request.dialogId;
    }
}
