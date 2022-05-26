import { QuestCallbacks } from "../../callbacks/QuestCallbacks";
import { StaticRouter } from "../../di/Router";
export declare class QuestStaticRouter extends StaticRouter {
    private questCallbacks;
    constructor(questCallbacks: QuestCallbacks);
}
