import { InraidCallbacks } from "../../callbacks/InraidCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class InraidDynamicRouter extends DynamicRouter {
    private inraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
    private readonly _routes;
    getTopLevelRoute(): string;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
