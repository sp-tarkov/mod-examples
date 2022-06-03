/// <reference types="node" />
import { IncomingMessage } from "http";
import { DynamicRouter, StaticRouter } from "../di/Router";
export declare class HttpRouter {
    private staticRouters;
    private dynamicRoutes;
    constructor(staticRouters: StaticRouter[], dynamicRoutes: DynamicRouter[]);
    private groupBy;
    getResponse(req: IncomingMessage, info: any, sessionID: string): string;
    private handleRoute;
}
