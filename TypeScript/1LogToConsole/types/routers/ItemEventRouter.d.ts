import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IItemEventRouterRequest } from "../models/eft/itemEvent/IItemEventRouterRequest";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { ItemEventRouterDefinition } from "../di/Router";
import { ILogger } from "../models/spt/utils/ILogger";
import { EventOutputHolder } from "./EventOutputHolder";
export declare class ItemEventRouter {
    protected logger: ILogger;
    protected profileHelper: ProfileHelper;
    protected itemEventRouters: ItemEventRouterDefinition[];
    protected eventOutputHolder: EventOutputHolder;
    constructor(logger: ILogger, profileHelper: ProfileHelper, itemEventRouters: ItemEventRouterDefinition[], eventOutputHolder: EventOutputHolder);
    handleEvents(info: IItemEventRouterRequest, sessionID: string): IItemEventRouterResponse;
}
