import { NotifierCallbacks } from "../../callbacks/NotifierCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class NotifierDynamicRouter extends DynamicRouter {
    private notifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
