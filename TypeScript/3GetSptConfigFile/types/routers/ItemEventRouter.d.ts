import { JsonUtil } from "../utils/JsonUtil";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { ItemEventRouterDefinition } from "../di/Router";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class ItemEventRouter {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected profileHelper: ProfileHelper;
    protected itemEventRouters: ItemEventRouterDefinition[];
    constructor(logger: ILogger, jsonUtil: JsonUtil, profileHelper: ProfileHelper, itemEventRouters: ItemEventRouterDefinition[]);
    protected output: IItemEventRouterResponse;
    handleEvents(info: IItemEventRouterRequest, sessionID: string): IItemEventRouterResponse;
    getOutput(sessionID: string): IItemEventRouterResponse;
    protected resetOutput(sessionID: string): void;
}
