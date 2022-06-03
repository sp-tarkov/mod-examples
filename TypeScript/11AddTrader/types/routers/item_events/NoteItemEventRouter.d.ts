import { IPmcData } from "../../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../../models/eft/itemEvent/IItemEventRouterResponse";
import { NoteCallbacks } from "../../callbacks/NoteCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class NoteItemEventRouter extends ItemEventRouterDefinition {
    private noteCallbacks;
    constructor(noteCallbacks: NoteCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): IItemEventRouterResponse;
}
