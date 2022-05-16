import { DatabaseServer } from "../servers/DatabaseServer";
import { Inventory as PmcInventory } from "../@types/eft/common/IPmcData";
import { Chances, Mods } from "../@types/eft/common/tables/IBotType";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { HashUtil } from "../utils/HashUtil";
import { Logger } from "../utils/Logger";
import { RandomUtil } from "../utils/RandomUtil";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
export declare class BotEquipmentGenerator {
    private logger;
    private hashUtil;
    private randomUtil;
    private databaseServer;
    private botGeneratorHelper;
    private weightedRandomHelper;
    constructor(logger: Logger, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, botGeneratorHelper: BotGeneratorHelper, weightedRandomHelper: WeightedRandomHelper);
    generateEquipment(equipmentSlot: string, equipmentPool: Record<string, number>, modPool: Mods, spawnChances: Chances, botRole: string, inventory: PmcInventory): void;
}
