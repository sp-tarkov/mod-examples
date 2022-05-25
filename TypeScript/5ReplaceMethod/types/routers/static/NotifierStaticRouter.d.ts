import { NotifierCallbacks } from "../../callbacks/NotifierCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class NotifierStaticRouter extends StaticRouter 
{
    private notifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
