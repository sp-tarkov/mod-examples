import { InsuredItem, IPmcData } from "../models/eft/common/IPmcData";
import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem, StackSlot } from "../models/eft/common/tables/ITemplateItem";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
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
    interface ItemSize {
        width: number;
        height: number;
    }
}
export { ItemHelper };
