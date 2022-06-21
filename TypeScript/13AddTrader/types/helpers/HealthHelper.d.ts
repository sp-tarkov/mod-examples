import { IPmcData } from "../models/eft/common/IPmcData";
import { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { IHealthConfig } from "../models/spt/config/IHealthConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { SaveServer } from "../servers/SaveServer";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class HealthHelper {
    protected jsonUtil: JsonUtil;
    protected logger: ILogger;
    protected timeUtil: TimeUtil;
    protected saveServer: SaveServer;
    protected configServer: ConfigServer;
    protected healthConfig: IHealthConfig;
    constructor(jsonUtil: JsonUtil, logger: ILogger, timeUtil: TimeUtil, saveServer: SaveServer, configServer: ConfigServer);
    resetVitality(sessionID: string): IAkiProfile;
    saveVitality(pmcData: IPmcData, info: ISyncHealthRequestData, sessionID: string): void;
    protected saveHealth(pmcData: IPmcData, sessionID: string): void;
    protected saveEffects(pmcData: IPmcData, sessionID: string): void;
    protected addEffect(pmcData: IPmcData, sessionID: string, effect: {
        bodyPart: string;
        effectType: string;
    }): void;
    protected isEmpty(map: any): boolean;
}
