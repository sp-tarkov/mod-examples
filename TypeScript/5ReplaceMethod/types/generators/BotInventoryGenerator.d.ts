import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { Inventory, Chances, Generation } from "../models/eft/common/tables/IBotType";
import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { BotWeaponGenerator } from "./BotWeaponGenerator";
import { BotLootGenerator } from "./BotLootGenerator";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
export declare class BotInventoryGenerator {
    private logger;
    private hashUtil;
    private randomUtil;
    private databaseServer;
    private botWeaponGenerator;
    private botLootGenerator;
    private botGeneratorHelper;
    private weightedRandomHelper;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, botWeaponGenerator: BotWeaponGenerator, botLootGenerator: BotLootGenerator, botGeneratorHelper: BotGeneratorHelper, weightedRandomHelper: WeightedRandomHelper);
    generateInventory(templateInventory: Inventory, equipmentChances: Chances, generation: Generation, botRole: string, isPmc: boolean): PmcInventory;
    private generateEquipment;
    private generateInventoryBase;
}
