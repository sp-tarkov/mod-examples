import { inject, injectable } from "tsyringe";
import { IAkiWebSocketMessageHandler } from "@spt-aki/servers/ws/message/IAkiWebSocketMessageHandler";
import { WebSocket, RawData } from "ws";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";

//    \/   dont forger this annotation here!
@injectable()
export class CustomAkiWebSocketMessageHandler implements IAkiWebSocketMessageHandler
{
    constructor(@inject("WinstonLogger") protected logger: ILogger)
    {}
    
    public onAkiMessage(sessionID: string, client: WebSocket, message: RawData): void
    {
        this.logger.info(`Custom AKI WebSocket Message handler received a message for ${sessionID}: ${message.toString()}`)
    }
}
