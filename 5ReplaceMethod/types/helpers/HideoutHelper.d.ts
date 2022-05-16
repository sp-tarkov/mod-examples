import { DatabaseServer } from "../servers/DatabaseServer";
import { IPmcData, Production, Productive } from "../@types/eft/common/IPmcData";
import { IHideoutSingleProductionStartRequestData } from "../@types/eft/hideout/IHideoutSingleProductionStartRequestData";
import { StageBonus } from "../@types/eft/hideout/IHideoutArea";
import { TimeUtil } from "../utils/TimeUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { HashUtil } from "../utils/HashUtil";
import { ProfileHelper } from "./ProfileHelper";
import { IHideoutContinousProductionStartRequestData } from "../@types/eft/hideout/IHideoutContinousProductionStartRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { ConfigServer } from "../servers/ConfigServer";
import { ItemEventRouter } from "../routers/ItemEventRouter";
import { HttpResponse } from "../utils/HttpResponse";
import { PlayerService } from "../services/PlayerService";
import { IHideoutTakeProductionRequestData } from "../@types/eft/hideout/IHideoutTakeProductionRequestData";
import { InventoryHelper } from "./InventoryHelper";
import { ITemplateItem } from "../@types/eft/common/tables/ITemplateItem";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class HideoutHelper {
    private logger;
    private hashUtil;
    private timeUtil;
    private randomUtil;
    private databaseServer;
    private itemEventRouter;
    private httpResponse;
    private profileHelper;
    private inventoryHelper;
    private playerService;
    private configServer;
    static BITCOIN_FARM: string;
    static WATER_COLLECTOR: string;
    static BITCOIN: string;
    static EXPEDITIONARY_FUEL_TANK: string;
    static NAME_BACKENDCOUNTERS_CRAFTING: string;
    static SKILL_NAME_HIDEOUT: string;
    static HOUR_FOR_SKILL_CRAFTING: number;
    static SKILL_NAME_CRAFITING: string;
    private hideoutConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, timeUtil: TimeUtil, randomUtil: RandomUtil, databaseServer: DatabaseServer, itemEventRouter: ItemEventRouter, httpResponse: HttpResponse, profileHelper: ProfileHelper, inventoryHelper: InventoryHelper, playerService: PlayerService, configServer: ConfigServer);
    registerProduction(pmcData: IPmcData, body: IHideoutSingleProductionStartRequestData | IHideoutContinousProductionStartRequestData, sessionID: string): IItemEventRouterResponse;
    /**
     * This convinience function intialies new Production Object
     * with all the constants.
     */
    initProduction(recipeId: string, productionTime: number): Production;
    isProductionType(productive: Productive): productive is Production;
    applyPlayerUpgradesBonuses(pmcData: IPmcData, bonus: StageBonus): void;
    private applySkillXPBoost;
    updatePlayerHideout(sessionID: string): void;
    private updateFuel;
    private updateWaterFilters;
    private getAreaUpdObject;
    private updateAirFilters;
    private updateBitcoinFarm;
    private getBTCSlots;
    private getManagementSkillsSlots;
    private hasManagementSkillSlots;
    private getHideoutManagementSkill;
    private getHideoutManagementConsumptionBonus;
    isProduction(productive: Productive): productive is Production;
    getBTC(pmcData: IPmcData, body: IHideoutTakeProductionRequestData, sessionID: string): IItemEventRouterResponse;
    getRandomAmountRewardForScavCase(itemToCalculate: ITemplateItem): number;
}
