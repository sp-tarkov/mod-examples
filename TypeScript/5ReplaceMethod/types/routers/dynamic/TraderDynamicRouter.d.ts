import { TraderCallbacks } from "../../callbacks/TraderCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class TraderDynamicRouter extends DynamicRouter {
    private traderCallbacks;
    constructor(traderCallbacks: TraderCallbacks);
}
