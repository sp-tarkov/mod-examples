import { BotCallbacks } from "../../callbacks/BotCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class BotDynamicRouter extends DynamicRouter 
{
    private botCallbacks;
    constructor(botCallbacks: BotCallbacks);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
