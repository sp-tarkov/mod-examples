import { ItemEventCallbacks } from "../../callbacks/ItemEventCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class ItemEventStaticRouter extends StaticRouter {
    private itemEventCallbacks;
    constructor(itemEventCallbacks: ItemEventCallbacks);
}
