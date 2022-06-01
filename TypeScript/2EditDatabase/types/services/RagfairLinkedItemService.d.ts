import { DatabaseServer } from "../servers/DatabaseServer";
export declare class RagfairLinkedItemService {
    private databaseServer;
    private linkedItemsCache;
    constructor(databaseServer: DatabaseServer);
    getLinkedItems(linkedSearchId: string): Iterable<string>;
    private buildLinkedItemTable;
    private getFilters;
}
