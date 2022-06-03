import { InraidCallbacks } from "../../callbacks/InraidCallbacks";
import { DynamicRouter } from "../../di/Router";
export declare class InraidDynamicRouter extends DynamicRouter {
    private inraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
    getTopLevelRoute(): string;
}
