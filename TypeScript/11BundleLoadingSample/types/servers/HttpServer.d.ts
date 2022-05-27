/// <reference types="node" />
import http, { ServerResponse } from "http";
import { Serializer } from "../di/Serializer";
import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { NotifierHelper } from "../helpers/NotifierHelper";
import { INotification } from "../models/eft/notifier/INotifier";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ILogger } from "../models/spt/utils/ILogger";
import { HttpRouter } from "../routers/HttpRouter";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ConfigServer } from "./ConfigServer";
import { DatabaseServer } from "./DatabaseServer";
export declare class HttpServer implements IHttpServer {
    private httpRouter;
    private logger;
    private randomUtil;
    private jsonUtil;
    private httpResponse;
    private databaseServer;
    private notifierHelper;
    private httpServerHelper;
    private serializers;
    private configServer;
    constructor(httpRouter: HttpRouter, // TODO: delay required
    logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, httpResponse: HttpResponseUtil, databaseServer: DatabaseServer, notifierHelper: NotifierHelper, httpServerHelper: HttpServerHelper, serializers: Serializer[], configServer: ConfigServer);
    private buffers;
    private onReceive;
    private onRespond;
    private httpConfig;
    private webSockets;
    private websocketPingHandler;
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
    private getRandomisedMessage;
    wsOnConnection(ws: any, req: any): void;
}
