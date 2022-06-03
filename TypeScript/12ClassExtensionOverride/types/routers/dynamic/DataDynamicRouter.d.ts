import { DataCallbacks } from "../../callbacks/DataCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class DataDynamicRouter extends DynamicRouter {
    private dataCallbacks;
    constructor(dataCallbacks: DataCallbacks);
}
