import { DurabilityLimitsHelper } from "../helpers/DurabilityLimitsHelper";
import { Inventory as PmcInventory } from "../models/eft/common/IPmcData";
import { Mods, ModsChances } from "../models/eft/common/tables/IBotType";
import { Item, Upd } from "../models/eft/common/tables/IItem";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ContainerHelper } from "./ContainerHelper";
import { InventoryHelper } from "./InventoryHelper";
import { ItemHelper } from "./ItemHelper";
export declare class BotGeneratorHelper {
    private logger;
    private jsonUtil;
    private hashUtil;
    private randomUtil;
    private databaseServer;
    private durabilityLimitsHelper;
    private itemHelper;
    private inventoryHelper;
    private containerHelper;
    private configServer;
    private botConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, durabilityLimitsHelper: DurabilityLimitsHelper, itemHelper: ItemHelper, inventoryHelper: InventoryHelper, containerHelper: ContainerHelper, configServer: ConfigServer);
    generateModsForItem(items: Item[], modPool: Mods, parentId: string, parentTemplate: ITemplateItem, modSpawnChances: ModsChances, isPmc?: boolean): Item[];
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
    private fillCamora;
    generateExtraPropertiesForItem(itemTemplate: ITemplateItem, botRole?: any): {
        "upd"?: Upd;
    };
    private getModTplFromItemDb;
    isItemIncompatibleWithCurrentItems(items: Item[], tplToCheck: string, equipmentSlot: string): boolean;
    /** Adds an item with all its childern into specified equipmentSlots, wherever it fits.
     * Returns a `boolean` indicating success. */
    addItemWithChildrenToEquipmentSlot(equipmentSlots: string[], parentId: string, parentTpl: string, itemWithChildren: Item[], inventory: PmcInventory): boolean;
    private itemAllowedInContainer;
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
