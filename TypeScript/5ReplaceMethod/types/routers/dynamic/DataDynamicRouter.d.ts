import { DataCallbacks } from "../../callbacks/DataCallbacks";
import { DynamicRouter, HandledRoute } from "../../di/Router";
export declare class DataDynamicRouter extends DynamicRouter 
{
    private dataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
