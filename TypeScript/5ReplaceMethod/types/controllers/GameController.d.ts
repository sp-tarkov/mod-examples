import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse";
import { IAkiProfile } from "../models/eft/profile/IAkiProfile";
import { ICoreConfig } from "../models/spt/config/ICoreConfig";
import { IHttpConfig } from "../models/spt/config/IHttpConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { LocaleService } from "../services/LocaleService";
import { ProfileFixerService } from "../services/ProfileFixerService";
import { Watermark } from "../utils/Watermark";
export declare class GameController {
    protected logger: ILogger;
    protected watermark: Watermark;
    protected httpServerHelper: HttpServerHelper;
    protected localeService: LocaleService;
    protected profileHelper: ProfileHelper;
    protected profileFixerService: ProfileFixerService;
    protected configServer: ConfigServer;
    protected httpConfig: IHttpConfig;
    protected coreConfig: ICoreConfig;
    constructor(logger: ILogger, watermark: Watermark, httpServerHelper: HttpServerHelper, localeService: LocaleService, profileHelper: ProfileHelper, profileFixerService: ProfileFixerService, configServer: ConfigServer);
    gameStart(_url: string, _info: IEmptyRequestData, sessionID: string): void;
    protected logProfileDetails(fullProfile: IAkiProfile): void;
    getGameConfig(sessionID: string): IGameConfigResponse;
    getServer(): any[];
    getValidGameVersion(): any;
}
