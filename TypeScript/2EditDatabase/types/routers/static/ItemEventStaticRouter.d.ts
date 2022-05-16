import { ItemEventCallbacks } from "../../callbacks/ItemEventCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class ItemEventStaticRouter extends StaticRouter {
    private itemEventCallbacks;
    constructor(itemEventCallbacks: ItemEventCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
