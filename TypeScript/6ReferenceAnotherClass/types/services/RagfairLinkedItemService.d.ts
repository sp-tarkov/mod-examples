import { DatabaseServer } from "../servers/DatabaseServer";
export declare class RagfairLinkedItemService {
    private databaseServer;
    private linkedItemsCache;
    constructor(databaseServer: DatabaseServer);
    getLinkedItems(linkedSearchId: string): Iterable<string>;
    buildLinkedItemTable(): void;
    private getFilters;
}
