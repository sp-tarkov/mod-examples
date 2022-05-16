import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class CustomizationDynamicRouter extends DynamicRouter {
    private customizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
