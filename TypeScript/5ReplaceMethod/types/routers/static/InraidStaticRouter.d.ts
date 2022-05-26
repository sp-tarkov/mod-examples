import { InraidCallbacks } from "../../callbacks/InraidCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class InraidStaticRouter extends StaticRouter {
    private inraidCallbacks;
    constructor(inraidCallbacks: InraidCallbacks);
}
