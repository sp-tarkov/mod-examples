/// <reference types="node" />
import http, { IncomingMessage, ServerResponse } from "http";
import WebSocket from "ws";
import { ApplicationContext } from "../context/ApplicationContext";
import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { NotifierHelper } from "../helpers/NotifierHelper";
import { INotification } from "../models/eft/notifier/INotifier";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { RandomUtil } from "../utils/RandomUtil";
import { ConfigServer } from "./ConfigServer";
import { DatabaseServer } from "./DatabaseServer";
import { IHttpListener } from "./http/IHttpListener";
export declare class HttpServer {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected notifierHelper: NotifierHelper;
    protected httpServerHelper: HttpServerHelper;
    protected httpListeners: IHttpListener[];
    protected configServer: ConfigServer;
    protected applicationContext: ApplicationContext;
    constructor(logger: ILogger, randomUtil: RandomUtil, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, httpServerHelper: HttpServerHelper, httpListeners: IHttpListener[], configServer: ConfigServer, applicationContext: ApplicationContext);
    protected httpConfig: IHttpConfig;
    protected webSockets: {};
    protected websocketPingHandler: any;
    getCookies(req: http.IncomingMessage): any;
    sendMessage(sessionID: string, output: INotification): void;
    isConnectionWebSocket(sessionID: string): boolean;
    handleRequest(req: IncomingMessage, resp: ServerResponse): void;
    load(): void;
    protected getRandomisedMessage(): string;
    protected wsOnConnection(ws: WebSocket.WebSocket, req: IncomingMessage): void;
}
