import { IPmcData } from "../../@types/eft/common/IPmcData";
import { QuestCallbacks } from "../../callbacks/QuestCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class QuestItemEventRouter extends ItemEventRouterDefinition {
    private questCallbacks;
    constructor(questCallbacks: QuestCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
