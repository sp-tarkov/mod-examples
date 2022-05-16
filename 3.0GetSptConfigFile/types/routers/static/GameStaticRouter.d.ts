import { GameCallbacks } from "../../callbacks/GameCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class GameStaticRouter extends StaticRouter {
    private gameCallbacks;
    constructor(gameCallbacks: GameCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
