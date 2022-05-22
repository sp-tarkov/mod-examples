import { DatabaseServer } from "../servers/DatabaseServer";
import { IPmcData } from "../models/eft/common/IPmcData";
import { Item } from "../models/eft/common/tables/IItem";
import { ConfigServer } from "../servers/ConfigServer";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class RepairHelper {
    private logger;
    private jsonUtil;
    private randomUtil;
    private databaseServer;
    private configServer;
    private repairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, configServer: ConfigServer);
    updateItemDurability(itemToRepairId: string, amountToRepair: number, pmcData: IPmcData, useRepairKit?: boolean): Item;
    private getRandomisedArmorRepairDegredationValue;
    private getRandomisedWeaponRepairDegredationValue;
    isWeaponTemplate(tpl: string): boolean;
}
