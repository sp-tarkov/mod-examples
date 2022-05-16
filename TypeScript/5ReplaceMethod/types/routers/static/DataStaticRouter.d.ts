import { DataCallbacks } from "../../callbacks/DataCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class DataStaticRouter extends StaticRouter {
    private dataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
