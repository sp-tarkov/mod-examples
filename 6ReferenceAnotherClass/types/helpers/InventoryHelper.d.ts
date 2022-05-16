import { IPmcData } from "../@types/eft/common/IPmcData";
import { Item } from "../@types/eft/common/tables/IItem";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { FenceService } from "../services/FenceService";
import { ContainerHelper } from "./ContainerHelper";
import { ItemHelper } from "./ItemHelper";
import { PaymentHelper } from "./PaymentHelper";
import { ProfileHelper } from "./ProfileHelper";
import { DialogueHelper } from "./DialogueHelper";
import { HashUtil } from "../utils/HashUtil";
import { HttpResponse } from "../utils/HttpResponse";
import { JsonUtil } from "../utils/JsonUtil";
import { IInventoryMoveRequestData } from "../@types/eft/inventory/IInventoryMoveRequestData";
import { IInventorySplitRequestData } from "../@types/eft/inventory/IInventorySplitRequestData";
import { IInventoryMergeRequestData } from "../@types/eft/inventory/IInventoryMergeRequestData";
import { ILogger } from "../@types/spt/utils/ILogger";
import { TraderAssortHelper } from "./TraderAssortHelper";
export interface OwnerInventoryItems {
    from: Item[];
    to: Item[];
    sameInventory: boolean;
    isMail: boolean;
}
export declare class InventoryHelper {
    private logger;
    private jsonUtil;
    private hashUtil;
    private httpResponse;
    private fenceService;
    private databaseServer;
    private paymentHelper;
    private traderAssortHelper;
    private dialogueHelper;
    private itemHelper;
    private containerHelper;
    private profileHelper;
    private configServer;
    private inventoryConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, httpResponse: HttpResponse, fenceService: FenceService, databaseServer: DatabaseServer, paymentHelper: PaymentHelper, traderAssortHelper: TraderAssortHelper, dialogueHelper: DialogueHelper, itemHelper: ItemHelper, containerHelper: ContainerHelper, profileHelper: ProfileHelper, configServer: ConfigServer);
    addItem(pmcData: IPmcData, body: any, output: IItemEventRouterResponse, sessionID: string, callback: any, foundInRaid?: boolean, addUpd?: any): IItemEventRouterResponse;
    removeItem(pmcData: IPmcData, itemId: string, sessionID: string, output?: IItemEventRouterResponse): IItemEventRouterResponse;
    getSecureContainerItems(items: Item[]): string[];
    getItemSize(itemTpl: string, itemID: string, inventoryItem: Item[]): Record<number, number>;
    private getSizeByInventoryItemHash;
    private getInventoryItemHash;
    /**
   * Recursively checks if the given item is
   * inside the stash, that is it has the stash as
   * ancestor with slotId=hideout
   */
    isItemInStash(pmcData: IPmcData, item: Item): boolean;
    getContainerMap(containerW: number, containerH: number, itemList: Item[], containerId: string): number[][];
    /**
     * Based on the item action, determine whose inventories we should be looking at for from and to.
     */
    getOwnerInventoryItems(body: IInventoryMoveRequestData | IInventorySplitRequestData | IInventoryMergeRequestData, sessionID: string): OwnerInventoryItems;
    /**
     * Made a 2d array table with 0 - free slot and 1 - used slot
     * @param {Object} pmcData
     * @param {string} sessionID
     * @returns Array
     */
    private getStashSlotMap;
    private getStashType;
    private getPlayerStashSize;
    /**
    * Internal helper function to transfer an item from one profile to another.
    * fromProfileData: Profile of the source.
    * toProfileData: Profile of the destination.
    * body: Move request
    */
    moveItemToProfile(fromItems: Item[], toItems: Item[], body: IInventoryMoveRequestData): void;
    /**
    * Internal helper function to move item within the same profile_f.
    */
    moveItemInternal(inventoryItems: Item[], body: IInventoryMoveRequestData): void;
    /**
    * Internal helper function to handle cartridges in inventory if any of them exist.
    */
    private handleCartridges;
}
