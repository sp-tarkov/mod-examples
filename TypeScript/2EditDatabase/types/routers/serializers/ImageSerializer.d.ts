import { IHttpServer } from "../../models/spt/server/IHttpServer";
import { Serializer } from "../../di/Serializer";
import { ImageRouter } from "../ImageRouter";
export declare class ImageSerializer extends Serializer {
    protected imageRouter: ImageRouter;
    constructor(imageRouter: ImageRouter);
    serialize(sessionID: string, req: any, resp: any, body: any, httpServer: IHttpServer): void;
    canHandle(route: string): boolean;
}
