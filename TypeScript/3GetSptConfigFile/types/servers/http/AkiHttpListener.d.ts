/// <reference types="node" />
/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { IHttpListener } from "./IHttpListener";
import { Serializer } from "../../di/Serializer";
import { ILogger } from "../../models/spt/utils/ILogger";
import { HttpRouter } from "../../routers/HttpRouter";
import { HttpResponseUtil } from "../../utils/HttpResponseUtil";
import { JsonUtil } from "../../utils/JsonUtil";
import { HttpBufferHandler } from "./HttpBufferHandler";
export declare class AkiHttpListener implements IHttpListener {
    protected httpRouter: HttpRouter;
    protected serializers: Serializer[];
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected httpResponse: HttpResponseUtil;
    protected httpBufferHandler: HttpBufferHandler;
    constructor(httpRouter: HttpRouter, // TODO: delay required
    serializers: Serializer[], logger: ILogger, jsonUtil: JsonUtil, httpResponse: HttpResponseUtil, httpBufferHandler: HttpBufferHandler);
    canHandle(_: string, req: IncomingMessage): boolean;
    handle(sessionId: string, req: IncomingMessage, resp: ServerResponse): void;
    sendResponse(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: Buffer, output: string): void;
    getResponse(sessionID: string, req: IncomingMessage, body: Buffer): string;
    protected getBodyInfo(body: Buffer): string;
    sendZlibJson(resp: ServerResponse, output: any, sessionID: string): void;
}
