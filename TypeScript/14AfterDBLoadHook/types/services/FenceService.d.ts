import { HandbookHelper } from "../helpers/HandbookHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { FenceLevel } from "../models/eft/common/IGlobals";
import { IPmcData } from "../models/eft/common/IPmcData";
import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { ITraderConfig } from "../models/spt/config/ITraderConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class FenceService {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected jsonUtil: JsonUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected handbookHelper: HandbookHelper;
    protected itemHelper: ItemHelper;
    protected presetHelper: PresetHelper;
    protected configServer: ConfigServer;
    protected fenceAssort: ITraderAssort;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, jsonUtil: JsonUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, itemHelper: ItemHelper, presetHelper: PresetHelper, configServer: ConfigServer);
    protected setFenceAssort(fenceAssort: ITraderAssort): void;
    getFenceAssorts(): ITraderAssort;
    hasExpiredCache(refreshAssort: boolean): boolean;
    generateFenceAssortCache(pmcData: IPmcData): void;
    /**
     * Get the fence level the passed in profile has
     * @param pmcData Player profile
     * @returns FenceLevel
     */
    getFenceInfo(pmcData: IPmcData): FenceLevel;
    removeFenceOffer(assortIdToRemove: string): void;
    updateFenceOffers(pmcData: IPmcData): void;
}
