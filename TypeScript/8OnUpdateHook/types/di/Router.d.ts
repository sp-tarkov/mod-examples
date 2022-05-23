import { IPmcData } from "../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
export declare class Router {
    private handledRoutes;
    constructor();
    getTopLevelRoute(): string;
    protected getHandledRoutes(): HandledRoute[];
    canHandle(url: string, partialMatch?: boolean): boolean;
}
export declare class StaticRouter extends Router {
    constructor();
    handleStatic(url: string, info: any, sessionID: string, output: string): any;
}
export declare class DynamicRouter extends Router {
    constructor();
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
export declare class ItemEventRouterDefinition extends Router {
    constructor();
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
export declare class SaveLoadRouter extends Router {
    constructor();
    handleLoad(profile: IAkiProfile): IAkiProfile;
}
export declare class HandledRoute {
    route: string;
    dynamic: boolean;
    constructor(route: string, dynamic: boolean);
}
