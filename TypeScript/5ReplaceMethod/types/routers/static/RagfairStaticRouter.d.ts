import { RagfairCallbacks } from "../../callbacks/RagfairCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class RagfairStaticRouter extends StaticRouter {
    private ragfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
