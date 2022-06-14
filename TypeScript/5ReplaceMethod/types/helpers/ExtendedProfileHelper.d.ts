import { BotGenerator } from "../generators/BotGenerator";
import { IPmcData, Skills, Stats } from "../models/eft/common/IPmcData";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { Watermark } from "../utils/Watermark";
import { ItemHelper } from "./ItemHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class ExtendedProfileHelper extends ProfileHelper {
    protected botGenerator: BotGenerator;
    constructor(jsonUtil: JsonUtil, watermark: Watermark, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, fenceService: FenceService, botGenerator: BotGenerator);
    generatePlayerScav(sessionID: string): IPmcData;
    protected getScavSkills(sessionID: string): Skills;
    protected removeSecureContainer(profile: IPmcData): IPmcData;
    protected getDefaultScavSkills(): Skills;
    protected getScavStats(sessionID: string): Stats;
    protected getScavLevel(sessionID: string): number;
    protected getScavExperience(sessionID: string): number;
    protected setScavCooldownTimer(profile: IPmcData, pmcData: IPmcData): IPmcData;
}
