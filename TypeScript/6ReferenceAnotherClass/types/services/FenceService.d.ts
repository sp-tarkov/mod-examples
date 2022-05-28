import { HandbookHelper } from "../helpers/HandbookHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { FenceLevel } from "../models/eft/common/IGlobals";
import { IPmcData } from "../models/eft/common/IPmcData";
import { ITraderAssort } from "../models/eft/common/tables/ITrader";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class FenceService {
    private logger;
    private hashUtil;
    private jsonUtil;
    private randomUtil;
    private databaseServer;
    private handbookHelper;
    private itemHelper;
    private presetHelper;
    private configServer;
    private fenceAssort;
    private traderConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, jsonUtil: JsonUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, handbookHelper: HandbookHelper, itemHelper: ItemHelper, presetHelper: PresetHelper, configServer: ConfigServer);
    private setFenceAssort;
    getFenceAssorts(): ITraderAssort;
    hasExpiredCache(refreshAssort: boolean): boolean;
    generateFenceAssortCache(pmcData: IPmcData): void;
    /**
     *
     * @param pmcData Get the fence level the passed in profile has
     * @returns FenceLevel
     */
    getFenceInfo(pmcData: IPmcData): FenceLevel;
    removeFenceOffer(assortIdToRemove: string): void;
    updateFenceOffers(pmcData: IPmcData): void;
}
