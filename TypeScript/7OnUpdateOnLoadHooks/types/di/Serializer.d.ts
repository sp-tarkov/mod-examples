import { IHttpServer } from "../models/spt/server/IHttpServer";
export declare class Serializer {
    serialize(sessionID: string, req: any, resp: any, body: any, httpServer: IHttpServer): void;
    canHandle(something: string): boolean;
}
