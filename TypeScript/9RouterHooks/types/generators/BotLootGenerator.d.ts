import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { HandbookHelper } from "../helpers/HandbookHelper";
import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { ItemMinMax, Items } from "../models/eft/common/tables/IBotType";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { BotLootCacheService } from "../services/BotLootCacheService";
import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotLootGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected botLootCacheService: BotLootCacheService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, botGeneratorHelper: BotGeneratorHelper, botLootCacheService: BotLootCacheService, configServer: ConfigServer);
    generateLoot(lootPool: Items, itemCounts: ItemMinMax, isPmc: boolean, botRole: string, inventory: PmcInventory): void;
    protected getRandomisedCount(min: number, max: number, nValue: number): number;
    protected addLootFromPool(pool: ITemplateItem[], equipmentSlots: string[], count: number, inventory: PmcInventory, totalValueLimit?: number, useLimits?: boolean): void;
}
