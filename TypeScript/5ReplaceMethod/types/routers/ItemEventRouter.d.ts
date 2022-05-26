import { JsonUtil } from "../utils/JsonUtil";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { ItemEventRouterDefinition } from "../di/Router";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class ItemEventRouter {
    private logger;
    private jsonUtil;
    private profileHelper;
    private itemEventRouters;
    constructor(logger: ILogger, jsonUtil: JsonUtil, profileHelper: ProfileHelper, itemEventRouters: ItemEventRouterDefinition[]);
    private output;
    handleEvents(info: IItemEventRouterRequest, sessionID: string): IItemEventRouterResponse;
    getOutput(sessionID: string): IItemEventRouterResponse;
    private resetOutput;
}
