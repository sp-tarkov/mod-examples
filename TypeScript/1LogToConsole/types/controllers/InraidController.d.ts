import { PlayerScavGenerator } from "../generators/PlayerScavGenerator";
import { HealthHelper } from "../helpers/HealthHelper";
import { InRaidHelper } from "../helpers/InRaidHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { QuestHelper } from "../helpers/QuestHelper";
import { TraderHelper } from "../helpers/TraderHelper";
import { IPmcData } from "../models/eft/common/IPmcData";
import { IRegisterPlayerRequestData } from "../models/eft/inRaid/IRegisterPlayerRequestData";
import { ISaveProgressRequestData } from "../models/eft/inRaid/ISaveProgressRequestData";
import { IInRaidConfig } from "../models/spt/config/IInRaidConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { InsuranceService } from "../services/InsuranceService";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class InraidController {
    protected logger: ILogger;
    protected saveServer: SaveServer;
    protected jsonUtil: JsonUtil;
    protected timeUtil: TimeUtil;
    protected databaseServer: DatabaseServer;
    protected questHelper: QuestHelper;
    protected itemHelper: ItemHelper;
    protected profileHelper: ProfileHelper;
    protected playerScavGenerator: PlayerScavGenerator;
    protected healthHelper: HealthHelper;
    protected traderHelper: TraderHelper;
    protected insuranceService: InsuranceService;
    protected inRaidHelper: InRaidHelper;
    protected configServer: ConfigServer;
    protected inraidConfig: IInRaidConfig;
    constructor(logger: ILogger, saveServer: SaveServer, jsonUtil: JsonUtil, timeUtil: TimeUtil, databaseServer: DatabaseServer, questHelper: QuestHelper, itemHelper: ItemHelper, profileHelper: ProfileHelper, playerScavGenerator: PlayerScavGenerator, healthHelper: HealthHelper, traderHelper: TraderHelper, insuranceService: InsuranceService, inRaidHelper: InRaidHelper, configServer: ConfigServer);
    addPlayer(sessionID: string, info: IRegisterPlayerRequestData): void;
    saveProgress(offraidData: ISaveProgressRequestData, sessionID: string): void;
    /**
     * Handle updating the profile post-pmc raid
     * @param sessionID session id
     * @param offraidData post-raid data of raid
     */
    protected savePmcProgress(sessionID: string, offraidData: ISaveProgressRequestData): void;
    /**
     * Reduce body part hp to % of max
     * @param pmcData profile to edit
     * @param multipler multipler to apply to max health
     */
    protected reducePmcHealthToPercent(pmcData: IPmcData, multipler: number): void;
    /**
     * Handle updating the profile post-pscav raid
     * @param sessionID session id
     * @param offraidData post-raid data of raid
     */
    protected savePlayerScavProgress(sessionID: string, offraidData: ISaveProgressRequestData): void;
    /**
     * Is the player dead after a raid - dead is anything other than "survived" / "runner"
     * @param statusOnExit exit value from offraidData object
     * @returns true if dead
     */
    protected isPlayerDead(statusOnExit: string): boolean;
    /**
     * Mark inventory items as FiR if player survived raid, otherwise remove FiR from them
     * @param offraidData Save Progress Request
     * @param pmcData player profile
     * @param isPlayerScav Was the player a pScav
     */
    protected markOrRemoveFoundInRaidItems(offraidData: ISaveProgressRequestData, pmcData: IPmcData, isPlayerScav: boolean): void;
    protected handlePostRaidPlayerScavProcess(scavData: IPmcData, sessionID: string, offraidData: ISaveProgressRequestData, pmcData: IPmcData, isDead: boolean): void;
    protected handlePostRaidPlayerScavKarmaChanges(pmcData: IPmcData, offraidData: ISaveProgressRequestData, scavData: IPmcData, sessionID: string): void;
}
