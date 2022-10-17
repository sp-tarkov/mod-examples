/// <reference types="node" />
import { HttpServerHelper } from "../helpers/HttpServerHelper";
import WebSocket from "ws";
import http, { IncomingMessage } from "http";
import { ILogger } from "../models/spt/utils/ILogger";
import { RandomUtil } from "../utils/RandomUtil";
import { INotification } from "../models/eft/notifier/INotifier";
import { ConfigServer } from "./ConfigServer";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
export declare class WebSocketServer {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected configServer: ConfigServer;
    protected httpServerHelper: HttpServerHelper;
    constructor(logger: ILogger, randomUtil: RandomUtil, configServer: ConfigServer, httpServerHelper: HttpServerHelper);
    protected httpConfig: IHttpConfig;
    protected defaultNotification: INotification;
    protected webSockets: Record<string, WebSocket.WebSocket>;
    protected websocketPingHandler: any;
    setupWebSocket(httpServer: http.Server): void;
    sendMessage(sessionID: string, output: INotification): void;
    protected getRandomisedMessage(): string;
    isConnectionWebSocket(sessionID: string): boolean;
    protected wsOnConnection(ws: WebSocket.WebSocket, req: IncomingMessage): void;
}
