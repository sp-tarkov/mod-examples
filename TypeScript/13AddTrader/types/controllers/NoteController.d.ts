import { IPmcData } from "../models/eft/common/IPmcData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { INoteActionData } from "../models/eft/notes/INoteActionData";
import { ItemEventRouter } from "../routers/ItemEventRouter";
declare class NoteController {
    private itemEventRouter;
    constructor(itemEventRouter: ItemEventRouter);
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
export { NoteController };
