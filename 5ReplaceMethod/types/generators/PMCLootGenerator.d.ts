import { ItemHelper } from "../helpers/ItemHelper";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ConfigServer } from "../servers/ConfigServer";
import { IBotConfig } from "../@types/spt/config/IBotConfig";
export declare class PMCLootGenerator {
    private itemHelper;
    private databaseServer;
    private configServer;
    private pocketLootPool;
    private backpackLootPool;
    botConfig: IBotConfig;
    constructor(itemHelper: ItemHelper, databaseServer: DatabaseServer, configServer: ConfigServer);
    generatePMCPocketLootPool(): string[];
    generatePMCBackpackLootPool(): string[];
}
