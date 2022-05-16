import { BotCallbacks } from "../../callbacks/BotCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class BotStaticRouter extends StaticRouter {
    private botCallbacks;
    constructor(botCallbacks: BotCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
