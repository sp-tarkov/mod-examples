import { ItemHelper } from "../helpers/ItemHelper";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ConfigServer } from "../servers/ConfigServer";
export declare class PMCLootGenerator {
    private itemHelper;
    private databaseServer;
    private configServer;
    private pocketLootPool;
    private backpackLootPool;
    private botConfig;
    constructor(itemHelper: ItemHelper, databaseServer: DatabaseServer, configServer: ConfigServer);
    generatePMCPocketLootPool(): string[];
    generatePMCBackpackLootPool(): string[];
}
