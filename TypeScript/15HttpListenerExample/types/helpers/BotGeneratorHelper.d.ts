import { DurabilityLimitsHelper } from "../helpers/DurabilityLimitsHelper";
import { Mods, ModsChances } from "../models/eft/common/tables/IBotType";
import { Item, Repairable, Upd } from "../models/eft/common/tables/IItem";
import { ITemplateItem, Slot } from "../models/eft/common/tables/ITemplateItem";
import { EquipmentFilterDetails, IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { BotEquipmentFilterService } from "../services/BotEquipmentFilterService";
import { ItemFilterService } from "../services/ItemFilterService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { BotWeaponGeneratorHelper } from "./BotWeaponGeneratorHelper";
import { ContainerHelper } from "./ContainerHelper";
import { InventoryHelper } from "./InventoryHelper";
import { ItemHelper } from "./ItemHelper";
import { ProbabilityHelper } from "./ProbabilityHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class BotModLimits {
    scope: ItemCount;
    scopeMax: number;
    scopeBaseTypes: string[];
    flashlightLaser: ItemCount;
    flashlightLaserMax: number;
    flashlgihtLaserBaseTypes: string[];
}
export declare class ItemCount {
    count: number;
}
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
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, probabilityHelper: ProbabilityHelper, databaseServer: DatabaseServer, durabilityLimitsHelper: DurabilityLimitsHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, containerHelper: ContainerHelper, botEquipmentFilterService: BotEquipmentFilterService, itemFilterService: ItemFilterService, profileHelper: ProfileHelper, botWeaponGeneratorHelper: BotWeaponGeneratorHelper, configServer: ConfigServer);
    /**
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
     * @param sessionId session id
     * @param weapon Weapon to add mods to
     * @param modPool Pool of compatible mods to attach to weapon
     * @param weaponParentId parentId of weapon
     * @param parentWeaponTemplate Weapon which mods will be generated on
     * @param modSpawnChances Mod spawn chances
     * @param ammoTpl Ammo tpl to use when generating magazines/cartridges
     * @param botRole Role of bot weapon is generated for
     * @returns Weapon + mods array
     */
    generateModsForWeapon(sessionId: string, weapon: Item[], modPool: Mods, weaponParentId: string, parentWeaponTemplate: ITemplateItem, modSpawnChances: ModsChances, ammoTpl: string, botRole: string): Item[];
    /**
     *
     * @param modSlot
     * @param isRandomisableSlot
     * @param modsParent
     * @param botEquipBlacklist
     * @param itemModPool
     * @param weapon array with only weapon tpl in it, ready for mods to be added
     * @param ammoTpl ammo tpl to use if slot requires a cartridge to be added (e.g. mod_magazine)
     * @param parentTemplate
     * @returns
     */
    protected chooseModToPutIntoSlot(modSlot: string, isRandomisableSlot: boolean, modsParent: Slot, botEquipBlacklist: EquipmentFilterDetails, itemModPool: Record<string, string[]>, weapon: Item[], ammoTpl: string, parentTemplate: ITemplateItem): [boolean, ITemplateItem];
    /**
     * Find mod tpls of a provided type and add to modPool
     * @param desiredSlotName slot to look up and add we are adding tpls for (e.g mod_scope)
     * @param modTemplate db object for modItem we get compatible mods from
     * @param modPool Pool of mods we are adding to
     */
    protected addCompatibleModsForProvidedMod(desiredSlotName: string, modTemplate: ITemplateItem, modPool: Mods, botEquipBlacklist: EquipmentFilterDetails): void;
    /**
     * Check if mod item is on limited list + has surpassed the limit set for it
     * @param botRole role the bot has e.g. assault
     * @param modTemplate mods template data
     * @param modLimits limits set for weapon being generated for this bot
     * @returns true if over item limit
     */
    protected modHasReachedItemLimit(botRole: string, modTemplate: ITemplateItem, modLimits: BotModLimits): boolean;
    /**
     * Initalise mod limits to be used when generating a weapon
     * @param botRole "assault", "bossTagilla" or "pmc"
     * @returns BotModLimits object
     */
    protected initModLimits(botRole: string): BotModLimits;
    /**
     * Generate a pool of mods for this bots mod type if bot has values inside `randomisedWeaponModSlots` array found in bot.json/equipment[botrole]
     * @param allowedMods Mods to be added to mod pool
     * @param botEquipBlacklist blacklist of items not allowed to be added to mod pool
     * @param modSlot Slot to generate mods for
     * @param itemModPool base mod pool to replace values of
     */
    protected generateDynamicWeaponModPool(allowedMods: string[], botEquipBlacklist: EquipmentFilterDetails, modSlot: string, itemModPool: Record<string, string[]>): void;
    /**
     * Find all compatible mods for equipment item and add to modPool
     * @param itemDetails item to find mods for
     * @param modPool ModPool to add mods to
     */
    generateDynamicModPool(itemDetails: ITemplateItem, modPool: Mods): void;
    /**
     * Take a list of tpls and filter out blacklisted values using itemFilterService + botEquipmentBlacklist
     * @param allowedMods base mods to filter
     * @param botEquipBlacklist equipment blacklist
     * @param modSlot slot mods belong to
     * @returns Filtered array of mod tpls
     */
    protected filterWeaponModsByBlacklist(allowedMods: string[], botEquipBlacklist: EquipmentFilterDetails, modSlot: string): string[];
    /**
     * Check if the specific item type on the weapon has reached the set limit
     * @param modTpl log mod tpl if over type limit
     * @param currentCount current number of this item on gun
     * @param maxLimit mod limit allowed
     * @param botRole role of bot we're checking weapon of
     * @returns true if limit reached
     */
    protected weaponModLimitReached(modTpl: string, currentCount: {
        count: number;
    }, maxLimit: number, botRole: string): boolean;
    /**
     * Log errors if mod is not compatible with slot
     * @param modToAdd template of mod to check
     * @param itemSlot slot the item will be placed in
     * @param modSlot slot the mod will fill
     * @param parentTemplate tempalte of the mods parent item
     * @returns true if valid
     */
    protected isModValidForSlot(modToAdd: [boolean, ITemplateItem], itemSlot: Slot, modSlot: string, parentTemplate: ITemplateItem): boolean;
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
     * e.g. mod_magazine / patron_in_weapon_000
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
    /**
     * Get a random mod from an items compatible mods Filter array
     * @param modTpl
     * @param parentSlot
     * @param modSlot
     * @param items
     * @returns item tpl
     */
    protected getModTplFromItemDb(modTpl: string, parentSlot: Slot, modSlot: string, items: Item[]): string;
    /**
     * Can an item be added to an item without issue
     * @param items
     * @param tplToCheck
     * @param equipmentSlot
     * @returns true if possible
     */
    isItemIncompatibleWithCurrentItems(items: Item[], tplToCheck: string, equipmentSlot: string): boolean;
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
