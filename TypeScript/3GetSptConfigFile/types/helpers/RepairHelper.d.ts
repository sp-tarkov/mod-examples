import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem, Props } from "../models/eft/common/tables/ITemplateItem";
import { IRepairConfig } from "../models/spt/config/IRepairConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class RepairHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected repairConfig: IRepairConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, configServer: ConfigServer);
    updateItemDurability(itemToRepair: Item, itemToRepairDetails: ITemplateItem, isArmor: boolean, amountToRepair: number, useRepairKit?: boolean, applyRandomDegradation?: boolean): Item;
    protected getRandomisedArmorRepairDegredationValue(armorMaterial: string, isRepairKit: boolean, armorMax: number): number;
    protected getRandomisedWeaponRepairDegredationValue(itemProps: Props, isRepairKit: boolean, armorMax: number): number;
    isWeaponTemplate(tpl: string): boolean;
}
