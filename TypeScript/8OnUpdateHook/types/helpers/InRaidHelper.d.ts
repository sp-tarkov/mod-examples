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
    private logger;
    private saveServer;
    private jsonUtil;
    private databaseServer;
    private inventoryHelper;
    private paymentHelper;
    constructor(logger: ILogger, saveServer: SaveServer, jsonUtil: JsonUtil, databaseServer: DatabaseServer, inventoryHelper: InventoryHelper, paymentHelper: PaymentHelper);
    private removePlayer;
    private removeMapAccessKey;
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
    deleteInventory(pmcData: IPmcData, sessionID: string): IPmcData;
    getPlayerGear(items: Item[]): Item[];
}
