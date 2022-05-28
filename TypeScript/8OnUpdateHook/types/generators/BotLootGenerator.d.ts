import { PMCLootGenerator } from "../generators/PMCLootGenerator";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { HandbookHelper } from "../helpers/HandbookHelper";
import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { ItemMinMax, Items } from "../models/eft/common/tables/IBotType";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotLootGenerator {
    private jsonUtil;
    private hashUtil;
    private randomUtil;
    private databaseServer;
    private handbookHelper;
    private botGeneratorHelper;
    private pmcLootGenerator;
    private configServer;
    private botConfig;
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, botGeneratorHelper: BotGeneratorHelper, pmcLootGenerator: PMCLootGenerator, configServer: ConfigServer);
    generateLoot(lootPool: Items, itemCounts: ItemMinMax, isPmc: boolean, inventory: PmcInventory): void;
    private getRandomisedCount;
    private addLootFromPool;
    /** Compares two item templates by their price to spawn chance ratio */
    private compareByValue;
}
