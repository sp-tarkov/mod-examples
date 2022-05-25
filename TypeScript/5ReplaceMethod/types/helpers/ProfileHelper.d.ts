import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { FenceService } from "../services/FenceService";
import { IPmcData, Stats } from "../models/eft/common/IPmcData";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { IValidateNicknameRequestData } from "../models/eft/profile/IValidateNicknameRequestData";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { ItemHelper } from "./ItemHelper";
import { IWatermark } from "../models/spt/utils/IWatermark";
export declare class ProfileHelper 
{
    protected jsonUtil: JsonUtil;
    protected watermark: IWatermark;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected fenceService: FenceService;
    constructor(jsonUtil: JsonUtil, watermark: IWatermark, timeUtil: TimeUtil, saveServer: SaveServer, databaseServer: DatabaseServer, itemHelper: ItemHelper, fenceService: FenceService);
    resetProfileQuestCondition(sessionID: string, conditionId: string): void;
    getCompleteProfile(sessionID: string): IPmcData[];
    isNicknameTaken(info: IValidateNicknameRequestData, sessionID: string): boolean;
    getProfileByPmcId(pmcId: string): IPmcData;
    getExperience(level: number): number;
    getMaxLevel(): number;
    getDefaultAkiDataObject(): any;
    getFullProfile(sessionID: string): IAkiProfile;
    getPmcProfile(sessionID: string): IPmcData;
    getScavProfile(sessionID: string): IPmcData;
    getDefaultCounters(): Stats;
    private isWiped;
    private getServerVersion;
}
