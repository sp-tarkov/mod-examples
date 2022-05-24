import { IAsyncQueue } from "../models/spt/utils/IAsyncQueue";
import { ICommand } from "../models/spt/utils/ICommand";
export declare class AsyncQueue implements IAsyncQueue {
    private commandsQueue;
    constructor();
    waitFor(command: ICommand): Promise<any>;
}
