/// <reference types="node" />
import http, { ServerResponse } from "http";
import { INotification } from "../../eft/notifier/INotifier";
export interface IHttpServer {
    load(): void;
    getCookies(req: http.IncomingMessage): any;
    sendFile(resp: ServerResponse, file: any): void;
    isConnectionWebSocket(sessionID: string): boolean;
    sendResponse(sessionID: string, req: any, resp: any, body: Buffer): void;
    sendMessage(sessionID: string, output: INotification): void;
}
