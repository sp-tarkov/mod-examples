import { IAsyncQueue } from "../@types/spt/utils/IAsyncQueue";
import { ICommand } from "../@types/spt/utils/ICommand";
export declare class AsyncQueue implements IAsyncQueue {
    commandsQueue: ICommand[];
    constructor();
    waitFor(command: ICommand): Promise<any>;
}
