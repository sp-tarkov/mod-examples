import { IPmcData } from "../@types/eft/common/IPmcData";
import { INoteActionData } from "../@types/eft/notes/INoteActionData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ItemEventRouter } from "../routers/ItemEventRouter";
declare class NoteController {
    private itemEventRouter;
    constructor(itemEventRouter: ItemEventRouter);
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
export { NoteController };
