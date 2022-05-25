import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { IPmcData } from "../models/eft/common/IPmcData";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { ItemHelper } from "./ItemHelper";
import { IWatermark } from "../models/spt/utils/IWatermark";
import { BotGenerator } from "../generators/BotGenerator";
import { ProfileHelper } from "./ProfileHelper";
export declare class ExtendedProfileHelper extends ProfileHelper 
{
    private botGenerator;
    constructor(jsonUtil: JsonUtil, watermark: IWatermark, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, fenceService: FenceService, botGenerator: BotGenerator);
    generatePlayerScav(sessionID: string): IPmcData;
    private getScavSkills;
    private removeSecureContainer;
    private getDefaultScavSkills;
    private getScavStats;
    private getScavLevel;
    private getScavExperience;
    private setScavCooldownTimer;
}
