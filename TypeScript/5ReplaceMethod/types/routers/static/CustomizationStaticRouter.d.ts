import { CustomizationCallbacks } from "../../callbacks/CustomizationCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class CustomizationStaticRouter extends StaticRouter 
{
    private customizationCallbacks;
    constructor(customizationCallbacks: CustomizationCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
