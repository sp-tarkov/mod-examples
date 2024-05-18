/// <reference types="node" />
import { IncomingMessage } from "http";
import { WebSocket } from "ws";
import { ProfileHelper } from "@spt-aki/helpers/ProfileHelper";
import { IWsNotificationEvent } from "@spt-aki/models/eft/ws/IWsNotificationEvent";
import { IHttpConfig } from "@spt-aki/models/spt/config/IHttpConfig";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { IWebSocketConnectionHandler } from "@spt-aki/servers/ws/IWebSocketConnectionHandler";
import { LocalisationService } from "@spt-aki/services/LocalisationService";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { IAkiWebSocketMessageHandler } from "./message/IAkiWebSocketMessageHandler";
export declare class AkiWebSocketConnectionHandler implements IWebSocketConnectionHandler {
    protected logger: ILogger;
    protected profileHelper: ProfileHelper;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected jsonUtil: JsonUtil;
    protected akiWebSocketMessageHandlers: IAkiWebSocketMessageHandler[];
    protected httpConfig: IHttpConfig;
    protected webSockets: Map<string, WebSocket>;
    protected defaultNotification: IWsNotificationEvent;
    protected websocketPingHandler: any;
    constructor(logger: ILogger, profileHelper: ProfileHelper, localisationService: LocalisationService, configServer: ConfigServer, jsonUtil: JsonUtil, akiWebSocketMessageHandlers: IAkiWebSocketMessageHandler[]);
    getSocketId(): string;
    getHookUrl(): string;
    onConnection(ws: WebSocket, req: IncomingMessage): void;
    sendMessage(sessionID: string, output: IWsNotificationEvent): void;
    isConnectionWebSocket(sessionID: string): boolean;
    getSessionWebSocket(sessionID: string): WebSocket;
}
