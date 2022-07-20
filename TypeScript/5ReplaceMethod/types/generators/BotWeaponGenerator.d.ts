import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { Inventory, MinMax, ModsChances } from "../models/eft/common/tables/IBotType";
import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { JsonUtil } from "../utils/JsonUtil";
export declare class BotWeaponGenerator {
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected botGeneratorHelper: BotGeneratorHelper;
    protected randomUtil: RandomUtil;
    private readonly modMagazineSlotId;
    constructor(jsonUtil: JsonUtil, logger: ILogger, hashUtil: HashUtil, databaseServer: DatabaseServer, itemHelper: ItemHelper, weightedRandomHelper: WeightedRandomHelper, botGeneratorHelper: BotGeneratorHelper, randomUtil: RandomUtil);
    generateWeapon(equipmentSlot: string, templateInventory: Inventory, modChances: ModsChances, magCounts: MinMax, botRole: string, isPmc: boolean, inventory: PmcInventory): void;
    /**
     * Get the mods necessary to kit out a weapon to its preset level
     * @param weaponTpl weapon to find preset for
     * @param equipmentSlot the slot the weapon will be placed in
     * @param weaponParentId
     * @returns array of weapon mods
     */
    protected getPresetWeaponMods(weaponTpl: string, equipmentSlot: string, weaponParentId: string, itemTemplate: ITemplateItem, botRole: string): Item[];
    /** Checks if all required slots are occupied on a weapon and all it's mods */
    protected isWeaponValid(itemList: Item[]): boolean;
    /**
     * Generates extra magazines or bullets (if magazine is internal) and adds them to TacticalVest and Pockets.
     * Additionally, adds extra bullets to SecuredContainer
     * @param weaponMods
     * @param weaponTemplate
     * @param magCounts
     * @param ammoTpl
     * @param inventory
     * @returns
     */
    protected generateExtraMagazines(weaponMods: Item[], weaponTemplate: ITemplateItem, magCounts: MinMax, ammoTpl: string, inventory: PmcInventory): void;
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
     * @returns magazine tpl string
     */
    protected getMagazineTplFromWeaponTemplate(weaponMods: Item[], weaponTemplate: ITemplateItem): string;
    protected addBulletsToVestAndPockets(ammoTpl: string, bulletCount: number, inventory: PmcInventory): void;
    /**
     * Finds and returns compatible ammo tpl
     *
     * @param {*} weaponMods
     * @param {*} weaponTemplate
     * @returns compatible ammo tpl
     */
    protected getCompatibleAmmo(weaponMods: Item[], weaponTemplate: ITemplateItem): string;
    /**
     * Fill existing magazines to full, while replacing their contents with specified ammo
     * @param weaponMods
     * @param magazine
     * @param ammoTpl
     */
    protected fillExistingMagazines(weaponMods: Item[], magazine: Item, ammoTpl: string): void;
    /**
     * Fill each Camora with a bullet
     * @param weaponMods Weapon mods to find and update camora mod(s) from
     * @param magazineId magazine id to find and add to
     * @param ammoTpl ammo template id to hydate with
     */
    protected fillCamorasWithAmmo(weaponMods: Item[], magazineId: string, ammoTpl: string): void;
}
