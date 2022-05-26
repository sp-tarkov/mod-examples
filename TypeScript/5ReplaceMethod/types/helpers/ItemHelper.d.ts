import { DatabaseServer } from "../servers/DatabaseServer";
import { InsuredItem, IPmcData } from "../models/eft/common/IPmcData";
import { ITemplateItem, StackSlot } from "../models/eft/common/tables/ITemplateItem";
import { Item } from "../models/eft/common/tables/IItem";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { ILogger } from "../models/spt/utils/ILogger";
declare class ItemHelper {
    private logger;
    private hashUtil;
    private jsonUtil;
    private databaseServer;
    constructor(logger: ILogger, hashUtil: HashUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer);
    /**
     * Checks if a id is a valid item. Valid meaning that it's an item that be stored in stash
     * @param       {string}    tpl       the template id / tpl
     * @returns                             boolean; true for items that may be in player posession and not quest items
     */
    isValidItem(tpl: string, invalidBaseTypes?: string[]): boolean;
    /**
     * Checks if a id is a valid item. Valid meaning that it's an item that may be a reward
     * or content of bot loot. Items that are tested as valid may be in a player backpack or stash.
     * @param {*} tpl template id of item to check
     * @returns boolean: true if item is valid reward
     */
    isValidRewardItem(tpl: string): boolean;
    /**
     * Picks rewardable items from items.json. This means they need to fit into the inventory and they shouldn't be keys (debatable)
     * @returns     a list of rewardable items [[_tpl, itemTemplate],...]
     */
    getRewardableItems(): [string, ITemplateItem][];
    /**
     * Check if the tpl / template Id provided is a descendent of the baseclass
     *
     * @param   {string}    tpl             the item template id to check
     * @param   {string}    baseclassTpl    the baseclass to check for
     * @return  {boolean}                   is the tpl a descendent?
     */
    isOfBaseclass(tpl: string, baseclassTpl: string): any;
    /**
     * Returns the item price based on the handbook or as a fallback from the prices.json if the item is not
     * found in the handbook. If the price can't be found at all return 0
     *
     * @param {string}      tpl           the item template to check
     * @returns {integer}                   The price of the item or 0 if not found
     */
    getItemPrice(tpl: string): number;
    fixItemStackCount(item: Item): Item;
    /**
     * AmmoBoxes contain StackSlots which need to be filled for the AmmoBox to have content.
     * Here's what a filled AmmoBox looks like:
     *   {
     *       "_id": "b1bbe982daa00ac841d4ae4d",
     *       "_tpl": "57372c89245977685d4159b1",
     *       "parentId": "5fe49a0e2694b0755a504876",
     *       "slotId": "hideout",
     *       "location": {
     *           "x": 3,
     *           "y": 4,
     *           "r": 0
     *       },
     *       "upd": {
     *           "StackObjectsCount": 1
     *       }
     *   },
     *   {
     *       "_id": "b997b4117199033afd274a06",
     *       "_tpl": "56dff061d2720bb5668b4567",
     *       "parentId": "b1bbe982daa00ac841d4ae4d",
     *       "slotId": "cartridges",
     *       "location": 0,
     *       "upd": {
     *           "StackObjectsCount": 30
     *       }
     *   }
     * Given the AmmoBox Item (first object) this function generates the StackSlot (second object) and returns it.
     * StackSlots are only used for AmmoBoxes which only have one element in StackSlots. However, it seems to be generic
     * to possibly also have more than one StackSlot. As good as possible, without seeing items having more than one
     * StackSlot, this function takes account of this and creates and returns an array of StackSlotItems
     *
     * @param {object}      item            The item template of the AmmoBox as given in items.json
     * @param {string}      parentId        The id of the AmmoBox instance these StackSlotItems should be children of
     * @returns {array}                     The array of StackSlotItems
     */
    generateStackSlotItems(item: ITemplateItem, parentId: string): StackSlot[];
    getItem(tpl: string): [boolean, ITemplateItem];
    getItemQualityModifier(item: Item): number;
    findAndReturnChildrenByItems(items: Item[], itemID: string): string[];
    /**
     * A variant of findAndReturnChildren where the output is list of item objects instead of their ids.
     */
    findAndReturnChildrenAsItems(items: Item[], baseItemId: string): Item[];
    /**
     * find children of the item in a given assort (weapons parts for example, need recursive loop function)
     */
    findAndReturnChildrenByAssort(itemIdToFind: string, assort: Item[]): Item[];
    hasBuyRestrictions(itemToCheck: Item): boolean;
    /**
     * Is Dogtag
     * Checks if an item is a dogtag. Used under profile_f.js to modify preparePrice based
     * on the level of the dogtag
     */
    isDogtag(tpl: string): boolean;
    isNotSellable(tpl: string): boolean;
    getChildId(item: Item): string;
    isItemTplStackable(tpl: string): boolean;
    /**
     * split item stack if it exceeds StackMaxSize
     */
    splitStack(item: Item): Item[];
    /**
     * Find Barter items in the inventory
     * @param {string} by
     * @param {Object} pmcData
     * @param {string} barter_itemID
     * @returns Array
     */
    findBarterItems(by: string, pmcData: IPmcData, barter_itemID: string): any[];
    /**
     * @param {Object} pmcData
     * @param {Array} items
     * @param {Object} fastPanel
     * @returns Array
     */
    replaceIDs(pmcData: IPmcData, items: Item[], insuredItems?: InsuredItem[], fastPanel?: any): any[];
    /**
     * Recursivly loop down through an items hierarchy to see if any of the ids match the supplied list, return true if any do
     * @param {string} tpl
     * @param {Array} tplsToCheck
     * @returns boolean
     */
    doesItemOrParentsIdMatch(tpl: string, tplsToCheck: string[]): boolean;
    /**
     * Return true if item is a quest item
     * @param {string} tpl
     * @returns boolean
     */
    isQuestItem(tpl: string): boolean;
    getItemSize(items: Item[], rootItemId: string): ItemHelper.ItemSize;
}
declare namespace ItemHelper {
    enum BaseClasses {
        WEAPON = "5422acb9af1c889c16000029",
        ARMOR = "5448e54d4bdc2dcc718b4568",
        VEST = "5448e5284bdc2dcb718b4567",
        BACKPACK = "5448e53e4bdc2d60728b4567",
        VISORS = "5448e5724bdc2ddf718b4568",
        FOOD = "5448e8d04bdc2ddf718b4569",
        DRINK = "5448e8d64bdc2dce718b4568",
        BARTER_ITEM = "5448eb774bdc2d0a728b4567",
        INFO = "5448ecbe4bdc2d60728b4568",
        MEDKIT = "5448f39d4bdc2d0a728b4568",
        DRUGS = "5448f3a14bdc2d27728b4569",
        STIMULATOR = "5448f3a64bdc2d60728b456a",
        MEDICAL = "5448f3ac4bdc2dce718b4569",
        MEDICAL_SUPPLIES = "57864c8c245977548867e7f1",
        MOD = "5448fe124bdc2da5018b4567",
        FUNCTIONAL_MOD = "550aa4154bdc2dd8348b456b",
        FUEL = "5d650c3e815116009f6201d2",
        GEAR_MOD = "55802f3e4bdc2de7118b4584",
        STOCK = "55818a594bdc2db9688b456a",
        FOREGRIP = "55818af64bdc2d5b648b4570",
        MASTER_MOD = "55802f4a4bdc2ddb688b4569",
        MOUNT = "55818b224bdc2dde698b456f",
        MUZZLE = "5448fe394bdc2d0d028b456c",
        SIGHTS = "5448fe7a4bdc2d6f028b456b",
        MEDS = "543be5664bdc2dd4348b4569",
        MONEY = "543be5dd4bdc2deb348b4569",
        KEY = "543be5e94bdc2df1348b4568",
        KEY_MECHANICAL = "5c99f98d86f7745c314214b3",
        KEYCARD = "5c164d2286f774194c5e69fa",
        EQUIPMENT = "543be5f84bdc2dd4348b456a",
        THROW_WEAPON = "543be6564bdc2df4348b4568",
        FOOD_DRINK = "543be6674bdc2df1348b4569",
        PISTOL = "5447b5cf4bdc2d65278b4567",
        SMG = "5447b5e04bdc2d62278b4567",
        ASSAULT_RIFLE = "5447b5f14bdc2d61278b4567",
        ASSAULT_CARBINE = "5447b5fc4bdc2d87278b4567",
        SHOTGUN = "5447b6094bdc2dc3278b4567",
        MARKSMAN_RIFLE = "5447b6194bdc2d67278b4567",
        SNIPER_RIFLE = "5447b6254bdc2dc3278b4568",
        MACHINE_GUN = "5447bed64bdc2d97278b4568",
        GRENADE_LAUNCHER = "5447bedf4bdc2d87278b4568",
        SPECIAL_WEAPON = "5447bee84bdc2dc3278b4569",
        SPEC_ITEM = "5447e0e74bdc2d3c308b4567",
        KNIFE = "5447e1d04bdc2dff2f8b4567",
        AMMO = "5485a8684bdc2da71d8b4567",
        AMMO_BOX = "543be5cb4bdc2deb348b4568",
        LOOT_CONTAINER = "566965d44bdc2d814c8b4571",
        MOD_CONTAINER = "5448bf274bdc2dfc2f8b456a",
        SEARCHABLE_ITEM = "566168634bdc2d144c8b456c",
        STASH = "566abbb64bdc2d144c8b457d",
        SORTING_TABLE = "6050cac987d3f925bf016837",
        LOCKABLE_CONTAINER = "5671435f4bdc2d96058b4569",
        SIMPLE_CONTAINER = "5795f317245977243854e041",
        INVENTORY = "55d720f24bdc2d88028b456d",
        STATIONARY_CONTAINER = "567583764bdc2d98058b456e",
        POCKETS = "557596e64bdc2dc2118b4571",
        ARMBAND = "5b3f15d486f77432d0509248",
        DOG_TAG_USEC = "59f32c3b86f77472a31742f0",
        DOG_TAG_BEAR = "59f32bb586f774757e1e8442",
        JEWELRY = "57864a3d24597754843f8721",
        ELECTRONICS = "57864a66245977548f04a81f",
        BUILDING_MATERIAL = "57864ada245977548638de91",
        TOOL = "57864bb7245977548b3b66c2",
        HOUSEHOLD_GOODS = "57864c322459775490116fbf",
        LUBRICANT = "57864e4c24597754843f8723",
        BATTERY = "57864ee62459775490116fc1",
        ASSAULT_SCOPE = "55818add4bdc2d5b648b456f",
        REFLEX_SIGHT = "55818ad54bdc2ddc698b4569",
        TACTICAL_COMBO = "55818b164bdc2ddc698b456c",
        MAGAZINE = "5448bc234bdc2d3c308b4569",
        LIGHT_LASER = "55818b0e4bdc2dde698b456e",
        FLASH_HIDER = "550aa4bf4bdc2dd6348b456b",
        COLLIMATOR = "55818ad54bdc2ddc698b4569",
        COMPACT_COLLIMATOR = "55818acf4bdc2dde698b456b",
        COMPENSATOR = "550aa4af4bdc2dd4348b456e",
        OPTIC_SCOPE = "55818ae44bdc2dde698b456c",
        SPECIAL_SCOPE = "55818aeb4bdc2ddc698b456a",
        OTHER = "590c745b86f7743cc433c5f2",
        SILENCER = "550aa4cd4bdc2dd8348b456c",
        PORTABLE_RANGE_FINDER = "61605ddea09d851a0a0c1bbc",
        ITEM = "54009119af1c881c07000029",
        CYLINDER_MAGAZINE = "610720f290b75a49ff2e5e25"
    }
    interface ItemSize {
        width: number;
        height: number;
    }
    enum Money {
        ROUBLES = "5449016a4bdc2d6f028b456f",
        EUROS = "569668774bdc2da2298b4568",
        DOLLARS = "5696686a4bdc2da3298b456a"
    }
}
export { ItemHelper };
