import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { MinMax } from "../models/common/MinMax";
import { Inventory as PmcInventory } from "../models/eft/common/tables/IBotBase";
import { Inventory, ModsChances } from "../models/eft/common/tables/IBotType";
import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { GenerateWeaponResult } from "../models/spt/bots/GenerateWeaponResult";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotWeaponGenerator {
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected randomUtil: RandomUtil;
    protected configServer: ConfigServer;
    protected readonly modMagazineSlotId = "mod_magazine";
    protected botConfig: IBotConfig;
    constructor(jsonUtil: JsonUtil, logger: ILogger, hashUtil: HashUtil, databaseServer: DatabaseServer, itemHelper: ItemHelper, weightedRandomHelper: WeightedRandomHelper, botGeneratorHelper: BotGeneratorHelper, randomUtil: RandomUtil, configServer: ConfigServer);
    /**
     * Get a random weapon from a bots pool of weapons (weighted)
     * @param equipmentSlot Primary/secondary/holster
     * @param botTemplateInventory e.g. assault.json
     * @returns weapon tpl
     */
    pickWeightedWeaponTplFromPool(equipmentSlot: string, botTemplateInventory: Inventory): string;
    /**
     * Generated a weapon based on the supplied weapon tpl
     * @param weaponTpl weapon tpl to generate (use pickWeightedWeaponTplFromPool())
     * @param equipmentSlot slot to fit into, primary/secondary/holster
     * @param botTemplateInventory e.g. assault.json
     * @param weaponParentId
     * @param modChances
     * @param botRole
     * @param isPmc
     * @returns GenerateWeaponResult object
     */
    generateWeaponByTpl(weaponTpl: string, equipmentSlot: string, botTemplateInventory: Inventory, weaponParentId: string, modChances: ModsChances, botRole: string, isPmc: boolean): GenerateWeaponResult;
    /**
     * Generate an entirely random weapon
     * @param equipmentSlot Primary/secondary/holster
     * @param botTemplateInventory e.g. assault.json
     * @param weaponParentId
     * @param modChances
     * @param botRole
     * @param isPmc
     * @returns GenerateWeaponResult object
     */
    generateRandomWeapon(equipmentSlot: string, botTemplateInventory: Inventory, weaponParentId: string, modChances: ModsChances, botRole: string, isPmc: boolean): GenerateWeaponResult;
    /**
     * Create array with weapon base as only element
     * Add additional properties as required
     * @param weaponTpl
     * @param weaponParentId
     * @param equipmentSlot
     * @param weaponItemTemplate
     * @param botRole for durability values
     * @returns
     */
    constructWeaponBaseArray(weaponTpl: string, weaponParentId: string, equipmentSlot: string, weaponItemTemplate: ITemplateItem, botRole: string): Item[];
    /**
     * Add compatible magazines to an inventory based on a generated weapon
     * @param weaponDetails
     * @param magCounts
     * @param inventory
     * @param botRole the bot type we're getting generating extra mags for
     */
    addExtraMagazinesToInventory(weaponDetails: GenerateWeaponResult, magCounts: MinMax, inventory: PmcInventory, botRole: string): void;
    /**
     * Get the mods necessary to kit out a weapon to its preset level
     * @param weaponTpl weapon to find preset for
     * @param equipmentSlot the slot the weapon will be placed in
     * @param weaponParentId Value used for the parentid
     * @returns array of weapon mods
     */
    protected getPresetWeaponMods(weaponTpl: string, equipmentSlot: string, weaponParentId: string, itemTemplate: ITemplateItem, botRole: string): Item[];
    /** Checks if all required slots are occupied on a weapon and all it's mods */
    protected isWeaponValid(weaponItemArray: Item[]): boolean;
    /**
     * Generates extra magazines or bullets (if magazine is internal) and adds them to TacticalVest and Pockets.
     * Additionally, adds extra bullets to SecuredContainer
     * @param weaponMods
     * @param weaponTemplate
     * @param magCounts
     * @param ammoTpl
     * @param inventory
     * @param botRole the bot type we're getting generating extra mags for
     * @returns
     */
    protected generateExtraMagazines(weaponMods: Item[], weaponTemplate: ITemplateItem, magCounts: MinMax, ammoTpl: string, inventory: PmcInventory, botRole: string): void;
    /**
     * Get a randomised number of bullets for a specific magazine
     * @param magCounts min and max count of magazines
     * @param magTemplate magazine to generate bullet count for
     * @returns bullet count number
     */
    protected getRandomisedBulletCount(magCounts: MinMax, magTemplate: ITemplateItem): number;
    /**
     * Get a randomised count of magazines
     * @param magCounts min and max value returned value can be between
     * @returns numberical value of magazine count
     */
    protected getRandomisedMagazineCount(magCounts: MinMax): number;
    /**
     * Add ammo to the secure container
     * @param stackCount How many stacks of ammo to add
     * @param ammoTpl Ammo type to add
     * @param stackSize Size of the ammo stack to add
     * @param inventory Player inventory
     */
    protected addAmmoToSecureContainer(stackCount: number, ammoTpl: string, stackSize: number, inventory: PmcInventory): void;
    /**
     * Get a weapons magazine tpl from a weapon template
     * @param weaponMods mods from a weapon template
     * @param weaponTemplate Weapon to get magazine tpl for
     * @param botRole the bot type we are getting the magazine for
     * @returns magazine tpl string
     */
    protected getMagazineTplFromWeaponTemplate(weaponMods: Item[], weaponTemplate: ITemplateItem, botRole: string): string;
    /**
     * Get a weapons default magazine template id
     * @param weaponTemplate weapon to get default magazine for
     * @returns tpl of magazine
     */
    protected getWeaponsDefaultMagazineTpl(weaponTemplate: ITemplateItem): string;
    protected addBulletsToVestAndPockets(ammoTpl: string, bulletCount: number, inventory: PmcInventory): void;
    /**
     * Finds and return a compatible ammo tpl based on the bots ammo weightings (x.json/inventory/equipment/ammo)
     * @param ammo a list of ammo tpls the weapon can use
     * @param weaponTemplate the weapon we want to pick ammo for
     * @param isPmc is the ammo being gathered for a pmc (runs pmc ammo filtering)
     * @returns an ammo tpl that works with the desired gun
     */
    protected getCompatibleAmmo(ammo: Record<string, Record<string, number>>, weaponTemplate: ITemplateItem, isPmc: boolean): string;
    /**
     * Get a weapons compatible cartridge caliber
     * @param weaponTemplate Weapon to look up caliber of
     * @returns caliber as string
     */
    protected getWeaponCaliber(weaponTemplate: ITemplateItem): string;
    /**
     * Fill existing magazines to full, while replacing their contents with specified ammo
     * @param weaponMods
     * @param magazine
     * @param ammoTpl
     */
    protected fillExistingMagazines(weaponMods: Item[], magazine: Item, ammoTpl: string): void;
    /**
     * Add cartridge item to weapon Item array, if it already exists, update
     * @param weaponMods Weapon items array to amend
     * @param magazine magazine item details we're adding cartridges to
     * @param chosenAmmo cartridge to put into the magazine
     * @param newStackSize how many cartridges should go into the magazine
     */
    protected addOrUpdateMagazinesChildWithAmmo(weaponMods: Item[], magazine: Item, chosenAmmo: string, newStackSize: number): void;
    /**
     * Fill each Camora with a bullet
     * @param weaponMods Weapon mods to find and update camora mod(s) from
     * @param magazineId magazine id to find and add to
     * @param ammoTpl ammo template id to hydate with
     */
    protected fillCamorasWithAmmo(weaponMods: Item[], magazineId: string, ammoTpl: string): void;
}
