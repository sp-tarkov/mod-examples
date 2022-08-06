import { Inventory as PmcInventory } from "../models/eft/common/tables/IBotBase";
import { Inventory, Chances, Generation, Mods } from "../models/eft/common/tables/IBotType";
import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { BotWeaponGenerator } from "./BotWeaponGenerator";
import { BotLootGenerator } from "./BotLootGenerator";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
export declare class BotInventoryGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected botWeaponGenerator: BotWeaponGenerator;
    protected botLootGenerator: BotLootGenerator;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected weightedRandomHelper: WeightedRandomHelper;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, botWeaponGenerator: BotWeaponGenerator, botLootGenerator: BotLootGenerator, botGeneratorHelper: BotGeneratorHelper, weightedRandomHelper: WeightedRandomHelper);
    generateInventory(templateInventory: Inventory, equipmentChances: Chances, generation: Generation, botRole: string, isPmc: boolean): PmcInventory;
    protected generateEquipment(equipmentSlot: string, equipmentPool: Record<string, number>, modPool: Mods, spawnChances: Chances, botRole: string, inventory: PmcInventory): void;
    protected generateInventoryBase(): PmcInventory;
}
