/// <reference types="node" />
import { IncomingMessage, ServerResponse } from "http";
import { IHttpServer } from "../models/spt/server/IHttpServer";
import { ImageRouteService } from "../services/mod/image/ImageRouteService";
import { VFS } from "../utils/VFS";
export declare class ImageRouter {
    private vfs;
    private imageRouteService;
    constructor(vfs: VFS, imageRouteService: ImageRouteService);
    addRoute(key: string, valueToAdd: string): void;
    sendImage(sessionID: string, req: IncomingMessage, resp: ServerResponse, body: any, httpServer: IHttpServer): void;
    getImage(): string;
}
