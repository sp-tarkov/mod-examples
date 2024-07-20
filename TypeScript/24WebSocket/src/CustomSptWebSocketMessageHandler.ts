import { inject, injectable } from "tsyringe";
import { WebSocket, RawData } from "ws";

import { ISptWebSocketMessageHandler } from "@spt/servers/ws/message/ISptWebSocketMessageHandler";
import { ILogger } from "@spt/models/spt/utils/ILogger";

//    \/   dont forger this annotation here!
@injectable()
export class CustomSptWebSocketMessageHandler implements ISptWebSocketMessageHandler {
    constructor(
        @inject("WinstonLogger") protected logger: ILogger,
    ) { }

    public onSptMessage(sessionID: string, client: WebSocket, message: RawData): void {
        this.logger.info(`Custom SPT WebSocket Message handler received a message for ${sessionID}: ${message.toString()}`);
    }
}
