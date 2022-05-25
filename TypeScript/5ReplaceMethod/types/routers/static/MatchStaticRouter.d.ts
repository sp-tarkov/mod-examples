import { MatchCallbacks } from "../../callbacks/MatchCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class MatchStaticRouter extends StaticRouter 
{
    private matchCallbacks;
    constructor(matchCallbacks: MatchCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
