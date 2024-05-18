import { RawData, WebSocket } from "ws";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IAkiWebSocketMessageHandler } from "@spt-aki/servers/ws/message/IAkiWebSocketMessageHandler";
export declare class DefaultAkiWebSocketMessageHandler implements IAkiWebSocketMessageHandler {
    protected logger: ILogger;
    constructor(logger: ILogger);
    onAkiMessage(sessionId: string, client: WebSocket, message: RawData): void;
}
