import { BotCallbacks } from "../../callbacks/BotCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class BotStaticRouter extends StaticRouter {
    private botCallbacks;
    constructor(botCallbacks: BotCallbacks);
}
