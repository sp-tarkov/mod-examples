import { IPmcData } from "../models/eft/common/IPmcData";
import { Common, HideoutArea, Production, Productive } from "../models/eft/common/tables/IBotBase";
import { Upd } from "../models/eft/common/tables/IItem";
import { StageBonus } from "../models/eft/hideout/IHideoutArea";
import { IHideoutContinousProductionStartRequestData } from "../models/eft/hideout/IHideoutContinousProductionStartRequestData";
import { IHideoutSingleProductionStartRequestData } from "../models/eft/hideout/IHideoutSingleProductionStartRequestData";
import { IHideoutTakeProductionRequestData } from "../models/eft/hideout/IHideoutTakeProductionRequestData";
import { IItemEventRouterResponse } from "../models/eft/itemEvent/IItemEventRouterResponse";
import { IHideoutConfig } from "../models/spt/config/IHideoutConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { PlayerService } from "../services/PlayerService";
import { HashUtil } from "../utils/HashUtil";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { InventoryHelper } from "./InventoryHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class HideoutHelper {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected timeUtil: TimeUtil;
    protected randomUtil: RandomUtil;
    protected databaseServer: DatabaseServer;
    protected itemEventRouter: ItemEventRouter;
    protected httpResponse: HttpResponseUtil;
    protected profileHelper: ProfileHelper;
    protected inventoryHelper: InventoryHelper;
    protected playerService: PlayerService;
    protected configServer: ConfigServer;
    static bitcoinFarm: string;
    static waterCollector: string;
    static bitcoin: string;
    static expeditionaryFuelTank: string;
    protected hideoutConfig: IHideoutConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, timeUtil: TimeUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, itemEventRouter: ItemEventRouter, httpResponse: HttpResponseUtil, profileHelper: ProfileHelper, inventoryHelper: InventoryHelper, playerService: PlayerService, configServer: ConfigServer);
    registerProduction(pmcData: IPmcData, body: IHideoutSingleProductionStartRequestData | IHideoutContinousProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * This convinience function intialies new Production Object
     * with all the constants.
     */
    initProduction(recipeId: string, productionTime: number): Production;
    isProductionType(productive: Productive): productive is Production;
    applyPlayerUpgradesBonuses(pmcData: IPmcData, bonus: StageBonus): void;
    protected applySkillXPBoost(pmcData: IPmcData, bonus: StageBonus): void;
    updatePlayerHideout(sessionID: string): void;
    protected updateWaterCollector(sessionId: string, pmcData: IPmcData, area: HideoutArea, isGeneratorOn: boolean): void;
    protected doesWaterCollectorHaveFilter(waterCollector: HideoutArea): boolean;
    protected updateFuel(generatorArea: HideoutArea, pmcData: IPmcData): HideoutArea;
    protected updateWaterFilters(waterFilterArea: HideoutArea, pwProd: Production, isGeneratorOn: boolean, pmcData: IPmcData): HideoutArea;
    protected getAreaUpdObject(stackCount: number, resourceValue: number, resourceUnitsConsumed: number): Upd;
    protected updateAirFilters(airFilterArea: HideoutArea, pmcData: IPmcData): HideoutArea;
    protected updateBitcoinFarm(pmcData: IPmcData, btcFarmCGs: number, isGeneratorOn: boolean): Production;
    protected getBTCSlots(pmcData: IPmcData): number;
    protected getManagementSkillsSlots(): number;
    protected hasManagementSkillSlots(pmcData: IPmcData): boolean;
    protected getHideoutManagementSkill(pmcData: IPmcData): Common;
    protected getHideoutManagementConsumptionBonus(pmcData: IPmcData): number;
    isProduction(productive: Productive): productive is Production;
    getBTC(pmcData: IPmcData, body: IHideoutTakeProductionRequestData, sessionID: string): IItemEventRouterResponse;
}
