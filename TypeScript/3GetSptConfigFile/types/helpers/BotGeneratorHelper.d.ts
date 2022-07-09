import { DurabilityLimitsHelper } from "../helpers/DurabilityLimitsHelper";
import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { Mods, ModsChances } from "../models/eft/common/tables/IBotType";
import { Item, Repairable, Upd } from "../models/eft/common/tables/IItem";
import { Grid, ITemplateItem, Slot } from "../models/eft/common/tables/ITemplateItem";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ContainerHelper } from "./ContainerHelper";
import { InventoryHelper } from "./InventoryHelper";
import { ItemHelper } from "./ItemHelper";
import { ProbabilityHelper } from "./ProbabilityHelper";
export declare class BotGeneratorHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected probabilityHelper: ProbabilityHelper;
    protected databaseServer: DatabaseServer;
    protected durabilityLimitsHelper: DurabilityLimitsHelper;
    protected itemHelper: ItemHelper;
    protected inventoryHelper: InventoryHelper;
    protected containerHelper: ContainerHelper;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, probabilityHelper: ProbabilityHelper, databaseServer: DatabaseServer, durabilityLimitsHelper: DurabilityLimitsHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, containerHelper: ContainerHelper, configServer: ConfigServer);
    generateModsForItem(items: Item[], modPool: Mods, parentId: string, parentTemplate: ITemplateItem, modSpawnChances: ModsChances, isPmc?: boolean): Item[];
    /**
     * Is this magazine cylinder related (revolvers and grenade launchers)
     * @param magazineParentName the name of the magazines parent
     * @returns true if it is cylinder related
     */
    magazineIsCylinderRelated(magazineParentName: string): boolean;
    /**
     * Get a list of non black-listed cartridges from the PMC bot config
     * @param modSlot mod item slot
     * @param itemModPool
     * @returns string array of cartridges PMCs can use
     */
    protected getNonBlacklistedCartridges(modSlot: string, itemModPool: Record<string, string[]>): string[];
    /**
     * randomly choose if a mod should be spawned, 100% for required mods OR mod is ammo slot
     * never return true for an item that has 0% spawn chance
     * @param itemSlot slot the item sits in
     * @param modSlot slot the mod sits in
     * @param modSpawnChances Chances for various mod spawns
     * @returns boolean true if it should spawn
     */
    protected shouldModBeSpawned(itemSlot: Slot, modSlot: string, modSpawnChances: ModsChances): boolean;
    /**
     * Get a list of containers that hold ammo
     * @returns string array
     */
    protected getAmmoContainers(): string[];
    /**
     * Get the slot details for an item (chamber/cartridge/slot)
     * @param modSlot e.g patron_in_weapon
     * @param parentTemplate item template
     * @returns
     */
    protected getModItemSlot(modSlot: string, parentTemplate: ITemplateItem): Slot;
    /**
     * With the shotgun revolver (60db29ce99594040e04c4a27) 12.12 introduced CylinderMagazines.
     * Those magazines (e.g. 60dc519adf4c47305f6d410d) have a "Cartridges" entry with a _max_count=0.
     * Ammo is not put into the magazine directly but assigned to the magazine's slots: The "camora_xxx" slots.
     * This function is a helper called by generateModsForItem for mods with parent type "CylinderMagazine"
     *
     * @param {object}      items               The items where the CylinderMagazine's camora are appended to
     * @param {object}      modPool             modPool which should include available cartrigdes
     * @param {string}      parentId            The CylinderMagazine's UID
     * @param {object}      parentTemplate      The CylinderMagazine's template
     */
    protected fillCamora(items: Item[], modPool: Mods, parentId: string, parentTemplate: ITemplateItem): void;
    /**
     * Take a record of camoras and merge the compatable shells into one array
     * @param camorasWithShells camoras we want to merge into one array
     * @returns string array of shells fro luitple camora sources
     */
    protected mergeCamoraPoolsTogether(camorasWithShells: Record<string, string[]>): string[];
    generateExtraPropertiesForItem(itemTemplate: ITemplateItem, botRole?: any): {
        upd?: Upd;
    };
    /**
     * Create a repairable object for a weapon that containers durability + max durability properties
     * @param itemTemplate weapon object being generated for
     * @param botRole type of bot being generated for
     * @returns Repairable object
     */
    protected generateWeaponRepairableProperties(itemTemplate: ITemplateItem, botRole: string): Repairable;
    /**
     * Create a repairable object for an armor that containers durability + max durability properties
     * @param itemTemplate weapon object being generated for
     * @param botRole type of bot being generated for
     * @returns Repairable object
     */
    protected generateArmorRepairableProperties(itemTemplate: ITemplateItem, botRole: string): Repairable;
    protected getModTplFromItemDb(modTpl: string, parentSlot: Slot, modSlot: string, items: Item[]): string;
    /**
     * Sort by spawn chance, highest to lowest, higher is more common
     * @param unsortedModArray String array to sort
     * @returns Sorted string array
     */
    protected sortModArray(unsortedModArray: string[]): string[];
    /**
     * Can an item be added to an item without issue
     * @param items
     * @param tplToCheck
     * @param equipmentSlot
     * @returns true if possible
     */
    isItemIncompatibleWithCurrentItems(items: Item[], tplToCheck: string, equipmentSlot: string): boolean;
    /**
     * Adds an item with all its childern into specified equipmentSlots, wherever it fits.
     * @param equipmentSlots
     * @param parentId
     * @param parentTpl
     * @param itemWithChildren
     * @param inventory
     * @returns a `boolean` indicating item was added
     */
    addItemWithChildrenToEquipmentSlot(equipmentSlots: string[], parentId: string, parentTpl: string, itemWithChildren: Item[], inventory: PmcInventory): boolean;
    protected itemAllowedInContainer(slot: Grid, itemTpl: string): boolean;
}
export declare class ExhaustableArray<T> {
    private itemPool;
    private randomUtil;
    private jsonUtil;
    private pool;
    constructor(itemPool: T[], randomUtil: RandomUtil, jsonUtil: JsonUtil);
    getRandomValue(): T;
    getFirstValue(): T;
    hasValues(): boolean;
}
