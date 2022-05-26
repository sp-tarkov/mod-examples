import { GameCallbacks } from "../../callbacks/GameCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class GameStaticRouter extends StaticRouter {
    private gameCallbacks;
    constructor(gameCallbacks: GameCallbacks);
}
