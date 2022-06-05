import { NotifierCallbacks } from "../../callbacks/NotifierCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class NotifierStaticRouter extends StaticRouter {
    private notifierCallbacks;
    constructor(notifierCallbacks: NotifierCallbacks);
}
