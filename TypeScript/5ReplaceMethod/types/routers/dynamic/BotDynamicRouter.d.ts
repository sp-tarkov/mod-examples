import { BotCallbacks } from "../../callbacks/BotCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class BotDynamicRouter extends DynamicRouter {
    private botCallbacks;
    constructor(botCallbacks: BotCallbacks);
}
