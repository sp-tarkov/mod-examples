import { inject, injectable } from "tsyringe";
import { WebSocket, RawData } from "ws";

import { IAkiWebSocketMessageHandler } from "@spt/servers/ws/message/IAkiWebSocketMessageHandler";
import { ILogger } from "@spt/models/spt/utils/ILogger";

//    \/   dont forger this annotation here!
@injectable()
export class CustomAkiWebSocketMessageHandler implements IAkiWebSocketMessageHandler
{
    constructor(
        @inject("WinstonLogger") protected logger: ILogger,
    )
    {}

    public onAkiMessage(sessionID: string, client: WebSocket, message: RawData): void
    {
        this.logger.info(`Custom AKI WebSocket Message handler received a message for ${sessionID}: ${message.toString()}`);
    }
}
