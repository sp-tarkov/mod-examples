import { ApplicationContext } from "../context/ApplicationContext";
import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { ICheckVersionResponse } from "../models/eft/game/ICheckVersionResponse";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse";
import { IServerDetails } from "../models/eft/game/IServerDetails";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { ICoreConfig } from "../models/spt/config/ICoreConfig";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocalisationService } from "../services/LocalisationService";
import { ProfileFixerService } from "../services/ProfileFixerService";
import { SeasonalEventService } from "../services/SeasonalEventService";
export declare class GameController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected httpServerHelper: HttpServerHelper;
    protected profileHelper: ProfileHelper;
    protected profileFixerService: ProfileFixerService;
    protected localisationService: LocalisationService;
    protected seasonalEventService: SeasonalEventService;
    protected applicationContext: ApplicationContext;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    protected coreConfig: ICoreConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, httpServerHelper: HttpServerHelper, profileHelper: ProfileHelper, profileFixerService: ProfileFixerService, localisationService: LocalisationService, seasonalEventService: SeasonalEventService, applicationContext: ApplicationContext, configServer: ConfigServer);
    gameStart(_url: string, _info: IEmptyRequestData, sessionID: string, startTimeStampMS: number): void;
    /**
     * Blank out the "test" mail message from prapor
     */
    protected removePraporTestMessage(): void;
    /**
     * Make non-trigger-spawned raiders spawn earlier + always
     */
    protected adjustLabsRaiderSpawnRate(): void;
    protected logProfileDetails(fullProfile: IAkiProfile): void;
    getGameConfig(sessionID: string): IGameConfigResponse;
    getServer(): IServerDetails[];
    getValidGameVersion(): ICheckVersionResponse;
}
