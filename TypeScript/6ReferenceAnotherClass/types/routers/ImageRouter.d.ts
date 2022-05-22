/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { VFS } from "../utils/VFS";
import { IHttpServer } from "../models/spt/server/IHttpServer";
export declare class ImageRouter {
    private vfs;
    constructor(vfs: VFS);
    private onRoute;
    addRoute(key: string, valueToAdd: string): void;
    sendImage(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any, httpServer: IHttpServer): void;
    getImage(): string;
}
