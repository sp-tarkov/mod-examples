import { IPmcData } from "../models/eft/common/IPmcData";
import { Item } from "../models/eft/common/tables/IItem";
import { IAddItemRequestData } from "../models/eft/inventory/IAddItemRequestData";
import { IInventoryMergeRequestData } from "../models/eft/inventory/IInventoryMergeRequestData";
import { IInventoryMoveRequestData } from "../models/eft/inventory/IInventoryMoveRequestData";
import { IInventorySplitRequestData } from "../models/eft/inventory/IInventorySplitRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { FenceService } from "../services/FenceService";
import { HashUtil } from "../utils/HashUtil";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { ContainerHelper } from "./ContainerHelper";
import { DialogueHelper } from "./DialogueHelper";
import { ItemHelper } from "./ItemHelper";
import { PaymentHelper } from "./PaymentHelper";
import { ProfileHelper } from "./ProfileHelper";
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
    constructor(logger: ILogger, jsonUtil: JsonUtil, hashUtil: HashUtil, httpResponse: HttpResponseUtil, fenceService: FenceService, databaseServer: DatabaseServer, paymentHelper: PaymentHelper, traderAssortHelper: TraderAssortHelper, dialogueHelper: DialogueHelper, itemHelper: ItemHelper, containerHelper: ContainerHelper, profileHelper: ProfileHelper, configServer: ConfigServer);
    addItem(pmcData: IPmcData, body: IAddItemRequestData, output: IItemEventRouterResponse, sessionID: string, callback: any, foundInRaid?: boolean, addUpd?: any): IItemEventRouterResponse;
    removeItem(pmcData: IPmcData, itemId: string, sessionID: string, output?: IItemEventRouterResponse): IItemEventRouterResponse;
    getItemSize(itemTpl: string, itemID: string, inventoryItem: Item[]): Record<number, number>;
    private getSizeByInventoryItemHash;
    private getInventoryItemHash;
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
