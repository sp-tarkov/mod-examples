import { TraderCallbacks } from "../../callbacks/TraderCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class TraderStaticRouter extends StaticRouter {
    private traderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
