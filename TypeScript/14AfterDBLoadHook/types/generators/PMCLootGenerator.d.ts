import { ItemHelper } from "../helpers/ItemHelper";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ConfigServer } from "../servers/ConfigServer";
import { IBotConfig } from "../models/spt/config/IBotConfig";
export declare class PMCLootGenerator {
    protected itemHelper: ItemHelper;
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected pocketLootPool: string[];
    protected backpackLootPool: string[];
    protected botConfig: IBotConfig;
    constructor(itemHelper: ItemHelper, databaseServer: DatabaseServer, configServer: ConfigServer);
    generatePMCPocketLootPool(): string[];
    generatePMCBackpackLootPool(): string[];
}
