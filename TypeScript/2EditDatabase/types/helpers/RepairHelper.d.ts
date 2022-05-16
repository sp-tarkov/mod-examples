import { DatabaseServer } from "../servers/DatabaseServer";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { Item } from "../@types/eft/common/tables/IItem";
import { ConfigServer } from "../servers/ConfigServer";
import { IRepairConfig } from "../@types/spt/config/IRepairConfig";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class RepairHelper {
    private logger;
    private jsonUtil;
    private randomUtil;
    private databaseServer;
    private configServer;
    repairConfig: IRepairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, configServer: ConfigServer);
    updateItemDurability(itemToRepairId: string, amountToRepair: number, pmcData: IPmcData, useRepairKit?: boolean): Item;
    private getRandomisedArmorRepairDegredationValue;
    private getRandomisedWeaponRepairDegredationValue;
    isWeaponTemplate(tpl: string): boolean;
}
