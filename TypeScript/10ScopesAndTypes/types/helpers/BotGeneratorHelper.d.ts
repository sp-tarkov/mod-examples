import { DurabilityLimitsHelper } from "../helpers/DurabilityLimitsHelper";
import { Inventory as PmcInventory } from "../models/eft/common/tables/IBotBase";
import { Mods, ModsChances } from "../models/eft/common/tables/IBotType";
import { Item, Repairable, Upd } from "../models/eft/common/tables/IItem";
import { Grid, ITemplateItem, Slot } from "../models/eft/common/tables/ITemplateItem";
import { EquipmentFilterDetails, IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { BotEquipmentFilterService } from "../services/BotEquipmentFilterService";
import { ItemFilterService } from "../services/ItemFilterService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ContainerHelper } from "./ContainerHelper";
import { InventoryHelper } from "./InventoryHelper";
import { ItemHelper } from "./ItemHelper";
import { ProbabilityHelper } from "./ProbabilityHelper";
import { ProfileHelper } from "./ProfileHelper";
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
    protected botEquipmentFilterService: BotEquipmentFilterService;
    protected itemFilterService: ItemFilterService;
    protected profileHelper: ProfileHelper;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, probabilityHelper: ProbabilityHelper, databaseServer: DatabaseServer, durabilityLimitsHelper: DurabilityLimitsHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, containerHelper: ContainerHelper, botEquipmentFilterService: BotEquipmentFilterService, itemFilterService: ItemFilterService, profileHelper: ProfileHelper, configServer: ConfigServer);
    /**
     * TODO - very similar to generateModsForWeapon
     * Check mods are compatible and add to array
     * @param equipment Equipment item to add mods to
     * @param modPool Mod list to choose frm
     * @param parentId parentid of item to add mod to
     * @param parentTemplate template objet of item to add mods to
     * @param modSpawnChances dictionary of mod items and their chance to spawn for this bot type
     * @returns Item + compatible mods as an array
     */
    generateModsForEquipment(equipment: Item[], modPool: Mods, parentId: string, parentTemplate: ITemplateItem, modSpawnChances: ModsChances): Item[];
    /**
     * TODO - very similar to generateModsForEquipment
     * @param sessionId session id
     * @param weapon Weapon to add mods to
     * @param modPool pool of compatible mods to attach to gun
     * @param weaponParentId parentId of weapon
     * @param parentTemplate
     * @param modSpawnChances
     * @param ammoTpl ammo tpl to use when generating magazines/cartridges
     * @param botRole role of bot weapon is generated for
     * @returns Weapon with mods
     */
    generateModsForWeapon(sessionId: string, weapon: Item[], modPool: Mods, weaponParentId: string, parentTemplate: ITemplateItem, modSpawnChances: ModsChances, ammoTpl: string, botRole: string): Item[];
    /**
     * Generate a pool of mods for this bots mod type if bot has values inside `randomisedWeaponModSlots` array found in bot.json/equipment[botrole]
     * @param allowedMods Mods to be added to mod pool
     * @param botEquipBlacklist blacklist of items not allowed to be added to mod pool
     * @param modSlot Slot to generate mods for
     * @param itemModPool base mod pool to replace values of
     */
    protected generateDynamicModPool(allowedMods: string[], botEquipBlacklist: EquipmentFilterDetails, modSlot: string, itemModPool: Record<string, string[]>): void;
    /**
     * Check if the specific item type on the weapon has reached the set limit
     * @param modTpl item to check is limited
     * @param currentCount current number of this item on gun
     * @param maxLimit mod limit allowed
     * @param botRole role of bot we're checking weapon of
     * @returns true if limit reached
     */
    protected weaponModLimitReached(modTpl: string, currentCount: {
        count: number;
    }, maxLimit: number, botRole: string): boolean;
    /**
     * log errors if mod is not valid for a slot
     * @param modTpl
     * @param found
     * @param itemSlot
     * @param modTemplate
     * @param modSlot
     * @param parentTemplate
     * @returns true if valid
     */
    protected isModValidForSlot(modTpl: string, found: boolean, itemSlot: Slot, modTemplate: ITemplateItem, modSlot: string, parentTemplate: ITemplateItem): boolean;
    /**
     * Create a mod item with parameters as properties
     * @param modId _id
     * @param modTpl _tpl
     * @param parentId parentId
     * @param modSlot slotId
     * @param modTemplate Used to add additional properites in the upd object
     * @returns Item object
     */
    protected createModItem(modId: string, modTpl: string, parentId: string, modSlot: string, modTemplate: ITemplateItem): Item;
    /**
     * Is this magazine cylinder related (revolvers and grenade launchers)
     * @param magazineParentName the name of the magazines parent
     * @returns true if it is cylinder related
     */
    magazineIsCylinderRelated(magazineParentName: string): boolean;
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
     * e.g. mod_magazine
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
     * @param items The items where the CylinderMagazine's camora are appended to
     * @param modPool modPool which should include available cartrigdes
     * @param parentId The CylinderMagazine's UID
     * @param parentTemplate The CylinderMagazine's template
     * @returns
     */
    protected fillCamora(items: Item[], modPool: Mods, parentId: string, parentTemplate: ITemplateItem): void;
    /**
     * Take a record of camoras and merge the compatable shells into one array
     * @param camorasWithShells camoras we want to merge into one array
     * @returns string array of shells fro luitple camora sources
     */
    protected mergeCamoraPoolsTogether(camorasWithShells: Record<string, string[]>): string[];
    /**
     * Adds properties to an item
     * e.g. Repairable / HasHinge / Foldable / MaxDurability
     * @param itemTemplate
     * @param botRole Used by weapons to randomise the durability values
     * @returns Item Upd object with extra properties
     */
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
    /**
     * is the provided item allowed inside a container
     * @param slot location item wants to be placed in
     * @param itemTpl item being placed
     * @returns true if allowed
     */
    protected itemAllowedInContainer(slot: Grid, itemTpl: string): boolean;
}
/** TODO - move into own class */
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
