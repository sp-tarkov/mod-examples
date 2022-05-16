import { QuestCallbacks } from "../../callbacks/QuestCallbacks";
import { HandledRoute, StaticRouter } from "../../di/Router";
export declare class QuestStaticRouter extends StaticRouter {
    private questCallbacks;
    constructor(questCallbacks: QuestCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
