import { PMCLootGenerator } from "../generators/PMCLootGenerator";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { HandbookHelper } from "../helpers/HandbookHelper";
import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { ItemMinMax, Items } from "../models/eft/common/tables/IBotType";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotLootGenerator {
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected pmcLootGenerator: PMCLootGenerator;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, botGeneratorHelper: BotGeneratorHelper, pmcLootGenerator: PMCLootGenerator, configServer: ConfigServer);
    generateLoot(lootPool: Items, itemCounts: ItemMinMax, isPmc: boolean, inventory: PmcInventory): void;
    protected getRandomisedCount(min: number, max: number, nValue: number): number;
    protected addLootFromPool(pool: ITemplateItem[], equipmentSlots: string[], count: number, inventory: PmcInventory, totalValueLimit?: number, useLimits?: boolean): void;
    /** Compares two item templates by their price to spawn chance ratio */
    protected compareByValue(a: ITemplateItem, b: ITemplateItem): number;
}
