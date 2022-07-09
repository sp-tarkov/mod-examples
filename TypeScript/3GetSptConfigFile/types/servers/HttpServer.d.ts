/// <reference types="node" />
/// <reference types="node" />
import http, { ServerResponse } from "http";
import { Serializer } from "../di/Serializer";
import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { NotifierHelper } from "../helpers/NotifierHelper";
import { INotification } from "../models/eft/notifier/INotifier";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { HttpRouter } from "../routers/HttpRouter";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ConfigServer } from "./ConfigServer";
import { DatabaseServer } from "./DatabaseServer";
export declare class HttpServer implements IHttpServer {
    protected httpRouter: HttpRouter;
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected httpResponse: HttpResponseUtil;
    protected databaseServer: DatabaseServer;
    protected notifierHelper: NotifierHelper;
    protected httpServerHelper: HttpServerHelper;
    protected serializers: Serializer[];
    protected configServer: ConfigServer;
    constructor(httpRouter: HttpRouter, // TODO: delay required
    logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, httpResponse: HttpResponseUtil, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, httpServerHelper: HttpServerHelper, serializers: Serializer[], configServer: ConfigServer);
    protected buffers: {};
    protected onReceive: {};
    protected onRespond: {};
    protected httpConfig: IHttpConfig;
    protected webSockets: {};
    protected websocketPingHandler: any;
    getCookies(req: http.IncomingMessage): any;
    resetBuffer(sessionID: string): void;
    putInBuffer(sessionID: any, data: any, bufLength: number): boolean;
    getFromBuffer(sessionID: string): any;
    sendZlibJson(resp: any, output: any, sessionID: string): void;
    sendMessage(sessionID: string, output: INotification): void;
    sendFile(resp: ServerResponse, file: any): void;
    isConnectionWebSocket(sessionID: string): boolean;
    sendResponse(sessionID: string, req: any, resp: any, body: Buffer): void;
    handleRequest(req: http.IncomingMessage, resp: http.ServerResponse): void;
    load(): void;
    protected getRandomisedMessage(): string;
    wsOnConnection(ws: any, req: any): void;
}
