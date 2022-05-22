import { NoteController } from "../controllers/NoteController";
import { IPmcData } from "../models/eft/common/IPmcData";
import { INoteActionData } from "../models/eft/notes/INoteActionData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
export declare class NoteCallbacks {
    private noteController;
    constructor(noteController: NoteController);
    addNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    editNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
    deleteNote(pmcData: IPmcData, body: INoteActionData, sessionID: string): IItemEventRouterResponse;
}
