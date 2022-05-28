import { IPmcData } from "../models/eft/common/IPmcData";
import { ISyncHealthRequestData } from "../models/eft/health/ISyncHealthRequestData";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { SaveServer } from "../servers/SaveServer";
import { JsonUtil } from "../utils/JsonUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class HealthHelper {
    private jsonUtil;
    private logger;
    private timeUtil;
    private saveServer;
    private configServer;
    private healthConfig;
    constructor(jsonUtil: JsonUtil, logger: ILogger, timeUtil: TimeUtil, saveServer: SaveServer, configServer: ConfigServer);
    resetVitality(sessionID: string): IAkiProfile;
    saveVitality(pmcData: IPmcData, info: ISyncHealthRequestData, sessionID: string): void;
    private saveHealth;
    private saveEffects;
    private addEffect;
    private isEmpty;
}
