import { RagfairCallbacks } from "../../callbacks/RagfairCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class RagfairStaticRouter extends StaticRouter {
    private ragfairCallbacks;
    constructor(ragfairCallbacks: RagfairCallbacks);
}
