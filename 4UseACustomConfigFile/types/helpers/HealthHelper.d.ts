import { SaveServer } from "../servers/SaveServer";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IAkiProfile } from "../@types/eft/profile/IAkiProfile";
import { ISyncHealthRequestData } from "../@types/eft/health/ISyncHealthRequestData";
import { ConfigServer } from "../servers/ConfigServer";
import { IHealthConfig } from "../@types/spt/config/IHealthConfig";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class HealthHelper {
    private jsonUtil;
    private logger;
    private timeUtil;
    private saveServer;
    private configServer;
    healthConfig: IHealthConfig;
    constructor(jsonUtil: JsonUtil, logger: ILogger, timeUtil: TimeUtil, saveServer: SaveServer, configServer: ConfigServer);
    resetVitality(sessionID: string): IAkiProfile;
    saveVitality(pmcData: IPmcData, info: ISyncHealthRequestData, sessionID: string): void;
    private saveHealth;
    private saveEffects;
    private addEffect;
    private isEmpty;
}
