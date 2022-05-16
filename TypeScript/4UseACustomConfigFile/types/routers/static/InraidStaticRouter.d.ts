import { InraidCallbacks } from "../../callbacks/InraidCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class InraidStaticRouter extends StaticRouter {
    private inraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
