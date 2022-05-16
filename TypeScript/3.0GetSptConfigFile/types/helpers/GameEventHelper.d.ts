import { DatabaseServer } from "../servers/DatabaseServer";
export declare class GameEventHelper {
    private databaseServer;
    constructor(databaseServer: DatabaseServer);
    get EVENT(): Record<string, string>;
    get christmasEventItems(): string[];
    itemIsChristmasRelated(itemId: string): boolean;
    christmasEventEnabled(): boolean;
}
