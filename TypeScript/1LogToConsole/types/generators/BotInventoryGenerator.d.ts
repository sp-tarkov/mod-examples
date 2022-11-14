import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { Inventory as PmcInventory } from "../models/eft/common/tables/IBotBase";
import { Chances, Generation, Inventory, Mods } from "../models/eft/common/tables/IBotType";
import { EquipmentSlots } from "../models/enums/EquipmentSlots";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocalisationService } from "../services/LocalisationService";
import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { BotLootGenerator } from "./BotLootGenerator";
import { BotWeaponGenerator } from "./BotWeaponGenerator";
export declare class BotInventoryGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected botWeaponGenerator: BotWeaponGenerator;
    protected botLootGenerator: BotLootGenerator;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, botWeaponGenerator: BotWeaponGenerator, botLootGenerator: BotLootGenerator, botGeneratorHelper: BotGeneratorHelper, weightedRandomHelper: WeightedRandomHelper, localisationService: LocalisationService, configServer: ConfigServer);
    /**
     * Add equipment/weapons/loot to bot
     * @param sessionId Session id
     * @param templateInventory bot/x.json data from db
     * @param equipmentChances Chances each item will be added to bot
     * @param itemGenerationLimitsMinMax item gen limits for bot role
     * @param botRole Role bot has (assault/pmcBot)
     * @param isPmc Is bot being converted into a pmc
     * @returns PmcInventory object with equipment/weapons/loot
     */
    generateInventory(sessionId: string, templateInventory: Inventory, equipmentChances: Chances, itemGenerationLimitsMinMax: Generation, botRole: string, isPmc: boolean): PmcInventory;
    /**
     * Create a pmcInventory object with all the base/generic items needed
     * @returns PmcInventory object
     */
    protected generateInventoryBase(): PmcInventory;
    /**
     * Add equipment to a bot
     * @param templateInventory bot/x.json data from db
     * @param equipmentChances Chances items will be added to bot
     * @param botRole Role bot has (assault/pmcBot)
     * @param botInventory Inventory to add equipment to
     */
    protected generateAndAddEquipmentToBot(templateInventory: Inventory, equipmentChances: Chances, botRole: string, botInventory: PmcInventory): void;
    protected generateEquipment(equipmentSlot: string, equipmentPool: Record<string, number>, modPool: Mods, spawnChances: Chances, botRole: string, inventory: PmcInventory): void;
    /**
     * Work out what weapons bot should have equipped and add them to bot inventory
     * @param templateInventory bot/x.json data from db
     * @param equipmentChances Chances bot can have equipment equipped
     * @param sessionId Session id
     * @param botInventory Inventory to add weapons to
     * @param botRole assault/pmcBot/bossTagilla etc
     * @param isPmc Is the bot being generated as a pmc
     * @param itemGenerationLimitsMinMax Limits for items the bot can have
     */
    protected generateAndAddWeaponsToBot(templateInventory: Inventory, equipmentChances: Chances, sessionId: string, botInventory: PmcInventory, botRole: string, isPmc: boolean, itemGenerationLimitsMinMax: Generation): void;
    /**
     * Calculate if the bot should have weapons in Primary/Secondary/Holster slots
     * @param equipmentChances Chances bot has certain equipment
     * @returns What slots bot should have weapons generated for
     */
    protected getDesiredWeaponsForBot(equipmentChances: Chances): {
        slot: EquipmentSlots;
        shouldSpawn: boolean;
    }[];
    /**
     * Add weapon + spare mags/ammo to bots inventory
     * @param sessionId Session id
     * @param weaponSlot Weapon slot being generated
     * @param templateInventory bot/x.json data from db
     * @param botInventory Inventory to add weapon+mags/ammo to
     * @param equipmentChances Chances bot can have equipment equipped
     * @param botRole assault/pmcBot/bossTagilla etc
     * @param isPmc Is the bot being generated as a pmc
     * @param itemGenerationLimitsMinMax
     */
    protected addWeaponAndMagazinesToInventory(sessionId: string, weaponSlot: {
        slot: EquipmentSlots;
        shouldSpawn: boolean;
    }, templateInventory: Inventory, botInventory: PmcInventory, equipmentChances: Chances, botRole: string, isPmc: boolean, itemGenerationLimitsMinMax: Generation): void;
}
