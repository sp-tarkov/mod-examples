import { IPmcData, Victim } from "../models/eft/common/IPmcData";
import { Item } from "../models/eft/common/tables/IItem";
import { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { JsonUtil } from "../utils/JsonUtil";
import { InventoryHelper } from "./InventoryHelper";
import { PaymentHelper } from "./PaymentHelper";
export declare class InRaidHelper {
    protected logger: ILogger;
    protected saveServer: SaveServer;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected inventoryHelper: InventoryHelper;
    protected paymentHelper: PaymentHelper;
    constructor(logger: ILogger, saveServer: SaveServer, jsonUtil: JsonUtil, databaseServer: DatabaseServer, inventoryHelper: InventoryHelper, paymentHelper: PaymentHelper);
    protected removePlayer(sessionID: string): void;
    protected removeMapAccessKey(offraidData: ISaveProgressRequestData, sessionID: string): void;
    addUpdToMoneyFromRaid(items: Item[]): void;
    /**
     * Add positive karma for PMC kills
     * @param {*} existingFenceStanding
     * @param {*} victims
     */
    calculateFenceStandingChangeFromKills(existingFenceStanding: number, victims: Victim[]): void;
    setBaseStats(profileData: IPmcData, offraidData: ISaveProgressRequestData, sessionID: string): IPmcData;
    markFoundItems(pmcData: IPmcData, profile: IPmcData, isPlayerScav: boolean): IPmcData;
    removeFoundInRaidStatusFromItems(profile: IPmcData): IPmcData;
    setInventory(sessionID: string, pmcData: IPmcData, profile: IPmcData): IPmcData;
    /**
     * Clear pmc inventory of all items except those that are exempt
     * @param pmcData Player profile
     * @param sessionID Session id
     * @returns Player profile with pmc inventory cleared
     */
    deleteInventory(pmcData: IPmcData, sessionID: string): IPmcData;
    /**
     * Does the provided items slotId mean its kept on the player after death
     * @param slotId slotid of item to check
     * @returns true if item is kept after death
     */
    isItemKeptAfterDeath(slotId: string): boolean;
    getPlayerGear(items: Item[]): Item[];
}
