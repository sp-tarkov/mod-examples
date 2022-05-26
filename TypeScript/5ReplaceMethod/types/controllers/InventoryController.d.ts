import { InventoryHelper } from "../helpers/InventoryHelper";
import { PaymentHelper } from "../helpers/PaymentHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IAddItemRequestData } from "../models/eft/inventory/IAddItemRequestData";
import { IInventoryBindRequestData } from "../models/eft/inventory/IInventoryBindRequestData";
import { IInventoryCreateMarkerRequestData } from "../models/eft/inventory/IInventoryCreateMarkerRequestData";
import { IInventoryDeleteMarkerRequestData } from "../models/eft/inventory/IInventoryDeleteMarkerRequestData";
import { IInventoryEditMarkerRequestData } from "../models/eft/inventory/IInventoryEditMarkerRequestData";
import { IInventoryExamineRequestData } from "../models/eft/inventory/IInventoryExamineRequestData";
import { IInventoryFoldRequestData } from "../models/eft/inventory/IInventoryFoldRequestData";
import { IInventoryMergeRequestData } from "../models/eft/inventory/IInventoryMergeRequestData";
import { IInventoryMoveRequestData } from "../models/eft/inventory/IInventoryMoveRequestData";
import { IInventoryReadEncyclopediaRequestData } from "../models/eft/inventory/IInventoryReadEncyclopediaRequestData";
import { IInventoryRemoveRequestData } from "../models/eft/inventory/IInventoryRemoveRequestData";
import { IInventorySortRequestData } from "../models/eft/inventory/IInventorySortRequestData";
import { IInventorySplitRequestData } from "../models/eft/inventory/IInventorySplitRequestData";
import { IInventorySwapRequestData } from "../models/eft/inventory/IInventorySwapRequestData";
import { IInventoryTagRequestData } from "../models/eft/inventory/IInventoryTagRequestData";
import { IInventoryToggleRequestData } from "../models/eft/inventory/IInventoryToggleRequestData";
import { IInventoryTransferRequestData } from "../models/eft/inventory/IInventoryTransferRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
export declare class InventoryController {
    private logger;
    private hashUtil;
    private jsonUtil;
    private databaseServer;
    private presetHelper;
    private inventoryHelper;
    private profileHelper;
    private paymentHelper;
    private itemEventRouter;
    constructor(logger: ILogger, hashUtil: HashUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, presetHelper: PresetHelper, inventoryHelper: InventoryHelper, profileHelper: ProfileHelper, paymentHelper: PaymentHelper, itemEventRouter: ItemEventRouter);
    /**
    * Move Item
    * change location of item with parentId and slotId
    * transfers items from one profile to another if fromOwner/toOwner is set in the body.
    * otherwise, move is contained within the same profile_f.
    */
    moveItem(pmcData: IPmcData, body: IInventoryMoveRequestData, sessionID: string): IItemEventRouterResponse;
    /**
    * Remove Item from Profile
    * Deep tree item deletion, also removes items from insurance list
    */
    removeItem(pmcData: IPmcData, itemId: string, sessionID: string, output?: IItemEventRouterResponse): IItemEventRouterResponse;
    /**
     * Implements functionality "Discard" from Main menu (Stash etc.)
     * Removes item from PMC Profile
     */
    discardItem(pmcData: IPmcData, body: IInventoryRemoveRequestData, sessionID: string): IItemEventRouterResponse;
    /**
    * Split Item
    * spliting 1 item-stack into 2 separate items ...
    */
    splitItem(pmcData: IPmcData, body: IInventorySplitRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Merge Item
     * merges 2 items into one, deletes item from `body.item` and adding number of stacks into `body.with`
     */
    mergeItem(pmcData: IPmcData, body: IInventoryMergeRequestData, sessionID: string): IItemEventRouterResponse;
    /**
    * Transfer item
    * Used to take items from scav inventory into stash or to insert ammo into mags (shotgun ones) and reloading weapon by clicking "Reload"
    */
    transferItem(pmcData: IPmcData, body: IInventoryTransferRequestData, sessionID: string): IItemEventRouterResponse;
    /**
    * Swap Item
    * its used for "reload" if you have weapon in hands and magazine is somewhere else in rig or backpack in equipment
    */
    swapItem(pmcData: IPmcData, body: IInventorySwapRequestData, sessionID: string): IItemEventRouterResponse;
    /**
    * Give Item
    * its used for "add" item like gifts etc.
    */
    addItem(pmcData: IPmcData, body: IAddItemRequestData, output: IItemEventRouterResponse, sessionID: string, callback: any, foundInRaid?: boolean, addUpd?: any): IItemEventRouterResponse;
    /**
     * Handles folding of Weapons
     */
    foldItem(pmcData: IPmcData, body: IInventoryFoldRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Toggles "Toggleable" items like night vision goggles and face shields.
     */
    toggleItem(pmcData: IPmcData, body: IInventoryToggleRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handles Tagging of items (primary Containers).
     */
    tagItem(pmcData: IPmcData, body: IInventoryTagRequestData, sessionID: string): IItemEventRouterResponse;
    bindItem(pmcData: IPmcData, body: IInventoryBindRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handles examining of the item     *
     */
    examineItem(pmcData: IPmcData, body: IInventoryExamineRequestData, sessionID: string): IItemEventRouterResponse;
    readEncyclopedia(pmcData: IPmcData, body: IInventoryReadEncyclopediaRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * Handles sorting of Inventory.
     */
    sortInventory(pmcData: IPmcData, body: IInventorySortRequestData, sessionID: string): IItemEventRouterResponse;
    createMapMarker(pmcData: IPmcData, body: IInventoryCreateMarkerRequestData, sessionID: string): IItemEventRouterResponse;
    deleteMapMarker(pmcData: IPmcData, body: IInventoryDeleteMarkerRequestData, sessionID: string): IItemEventRouterResponse;
    editMapMarker(pmcData: IPmcData, body: IInventoryEditMarkerRequestData, sessionID: string): IItemEventRouterResponse;
}
