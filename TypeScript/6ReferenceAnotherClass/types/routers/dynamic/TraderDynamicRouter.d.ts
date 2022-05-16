import { TraderCallbacks } from "../../callbacks/TraderCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class TraderDynamicRouter extends DynamicRouter {
    private traderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
