import { ApplicationContext } from "../context/ApplicationContext";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { Config } from "../models/eft/common/IGlobals";
import { ICheckVersionResponse } from "../models/eft/game/ICheckVersionResponse";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse";
import { IServerDetails } from "../models/eft/game/IServerDetails";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { ICoreConfig } from "../models/spt/config/ICoreConfig";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { ISeasonalEvent } from "../models/spt/config/ISeasonalEventConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocaleService } from "../services/LocaleService";
import { LocalisationService } from "../services/LocalisationService";
import { ProfileFixerService } from "../services/ProfileFixerService";
import { Watermark } from "../utils/Watermark";
export declare class GameController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected watermark: Watermark;
    protected httpServerHelper: HttpServerHelper;
    protected localeService: LocaleService;
    protected profileHelper: ProfileHelper;
    protected profileFixerService: ProfileFixerService;
    protected localisationService: LocalisationService;
    protected gameEventHelper: GameEventHelper;
    protected applicationContext: ApplicationContext;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    protected coreConfig: ICoreConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, watermark: Watermark, httpServerHelper: HttpServerHelper, localeService: LocaleService, profileHelper: ProfileHelper, profileFixerService: ProfileFixerService, localisationService: LocalisationService, gameEventHelper: GameEventHelper, applicationContext: ApplicationContext, configServer: ConfigServer);
    gameStart(_url: string, _info: IEmptyRequestData, sessionID: string, startTimeStampMS: number): void;
    /**
     * Check if current date falls inside any of the seasons events pased in, if so, handle them
     * @param seasonalEvents events to check for
     */
    protected checkForAndEnableSeasonalEvents(seasonalEvents: ISeasonalEvent[]): void;
    /**
     * Make adjusted to server code based on the name of the event passed in
     * @param globalConfig globals.json
     * @param eventName Name of the event to enable. e.g. Christmas
     */
    protected updateGlobalEvents(globalConfig: Config, eventName: string): void;
    /**
     * Read in data from seasonalEvents.json and add found equipment items to bots
     * @param eventName Name of the event to read equipment in from config
     */
    protected addEventGearToScavs(eventName: string): void;
    /**
     * Set Khorovod(dancing tree) chance to 100% on all maps that support it
     */
    protected enableDancingTree(): void;
    /**
     * Make non-trigger-spawned raiders spawn earlier + always
     */
    protected adjustLabsRaiderSpawnRate(): void;
    protected logProfileDetails(fullProfile: IAkiProfile): void;
    getGameConfig(sessionID: string): IGameConfigResponse;
    getServer(): IServerDetails[];
    protected addPumpkinsToScavBackpacks(): void;
    getValidGameVersion(): ICheckVersionResponse;
}
