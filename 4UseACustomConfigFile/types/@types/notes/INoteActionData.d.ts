import { INote } from "../eft/notes/INoteData";
export interface INoteActionData {
    Action: string;
    index: number;
    note: INote;
}
