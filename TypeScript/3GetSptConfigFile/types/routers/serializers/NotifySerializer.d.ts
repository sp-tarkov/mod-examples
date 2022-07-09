import { NotifierController } from "../../controllers/NotifierController";
import { Serializer } from "../../di/Serializer";
import { HttpServerHelper } from "../../helpers/HttpServerHelper";
import { IHttpServer } from "../../models/spt/server/IHttpServer";
export declare class NotifySerializer extends Serializer {
    protected notifierController: NotifierController;
    protected httpServerHelper: HttpServerHelper;
    constructor(notifierController: NotifierController, httpServerHelper: HttpServerHelper);
    serialize(_sessionID: string, req: any, resp: any, body: any, httpServer: IHttpServer): void;
    canHandle(route: string): boolean;
}
