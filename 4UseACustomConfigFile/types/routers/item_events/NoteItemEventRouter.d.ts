import { IPmcData } from "../../@types/eft/common/IPmcData";
import { NoteCallbacks } from "../../callbacks/NoteCallbacks";
import { HandledRoute, ItemEventRouterDefinition } from "../../di/Router";
export declare class NoteItemEventRouter extends ItemEventRouterDefinition {
    private noteCallbacks;
    constructor(noteCallbacks: NoteCallbacks);
    getHandledRoutes(): HandledRoute[];
    handleItemEvent(url: string, pmcData: IPmcData, body: any, sessionID: string): any;
}
