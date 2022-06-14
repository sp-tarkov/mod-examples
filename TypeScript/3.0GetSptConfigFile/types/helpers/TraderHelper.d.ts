import { IPmcData } from "../models/eft/common/IPmcData";
import { IBarterScheme, ITraderAssort, ITraderBase, LoyaltyLevel } from "../models/eft/common/tables/ITrader";
import { ITraderConfig } from "../models/spt/config/ITraderConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { PlayerService } from "../services/PlayerService";
import { HandbookHelper } from "./HandbookHelper";
import { ItemHelper } from "./ItemHelper";
import { PaymentHelper } from "./PaymentHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class TraderHelper {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected saveServer: SaveServer;
    protected profileHelper: ProfileHelper;
    protected paymentHelper: PaymentHelper;
    protected itemHelper: ItemHelper;
    protected handbookHelper: HandbookHelper;
    protected playerService: PlayerService;
    protected fenceService: FenceService;
    protected configServer: ConfigServer;
    protected traderConfig: ITraderConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, saveServer: SaveServer, profileHelper: ProfileHelper, paymentHelper: PaymentHelper, itemHelper: ItemHelper, handbookHelper: HandbookHelper, playerService: PlayerService, fenceService: FenceService, configServer: ConfigServer);
    getTrader(traderID: string, sessionID: string): ITraderBase;
    getTraderAssortsById(traderId: string): ITraderAssort;
    /**
     * Reset a trader back to its initial state as seen by a level 1 player
     * Does NOT take into account different profile levels
     * @param sessionID session id
     * @param traderID trader id to reset
     */
    resetTrader(sessionID: string, traderID: string): void;
    changeTraderDisplay(traderID: string, status: boolean, sessionID: string): void;
    getPurchasesData(traderID: string, sessionID: string): Record<string, IBarterScheme[][]>;
    /**
     * Calculate traders level based on exp amount and increment level if over threshold
     * @param traderID trader to process
     * @param sessionID session id
     */
    lvlUp(traderID: string, sessionID: string): void;
    getTraderUpdateSeconds(traderId: string): number;
    /**
    * check if an item is allowed to be sold to a trader
    * @param traderFilters array of allowed categories
    * @param tplToCheck itemTpl of inventory
    * @returns boolean
    */
    traderFilter(traderFilters: string[], tplToCheck: string): boolean;
    getLoyaltyLevel(traderID: string, pmcData: IPmcData): LoyaltyLevel;
}
