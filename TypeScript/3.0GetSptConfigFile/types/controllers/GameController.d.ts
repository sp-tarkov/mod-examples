import { ProfileHelper } from "../helpers/ProfileHelper";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { IGameConfigResponse } from "../@types/eft/game/IGameConfigResponse";
import { ConfigServer } from "../servers/ConfigServer";
import { ILogger } from "../@types/spt/utils/ILogger";
import { IWatermark } from "../@types/spt/utils/IWatermark";
import { HttpServerHelper } from "../helpers/HttpServerHelper";
export declare class GameController {
    private logger;
    private watermark;
    private httpServerHelper;
    private profileHelper;
    private configServer;
    private httpConfig;
    constructor(logger: ILogger, watermark: IWatermark, httpServerHelper: HttpServerHelper, profileHelper: ProfileHelper, configServer: ConfigServer);
    gameStart(url: string, info: IEmptyRequestData, sessionID: string): void;
    getGameConfig(sessionID: string): IGameConfigResponse;
    getServer(): any[];
    private getActiveRepeatableQuests;
}
