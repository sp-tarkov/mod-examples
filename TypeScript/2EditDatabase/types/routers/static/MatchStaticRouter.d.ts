import { MatchCallbacks } from "../../callbacks/MatchCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class MatchStaticRouter extends StaticRouter {
    private matchCallbacks;
    constructor(matchCallbacks: MatchCallbacks);
}
