import { HttpServerHelper } from "../helpers/HttpServerHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { Watermark } from "../utils/Watermark";
export declare class GameController {
    private logger;
    private watermark;
    private httpServerHelper;
    private profileHelper;
    private configServer;
    private httpConfig;
    constructor(logger: ILogger, watermark: Watermark, httpServerHelper: HttpServerHelper, profileHelper: ProfileHelper, configServer: ConfigServer);
    gameStart(_url: string, _info: IEmptyRequestData, sessionID: string): void;
    private addMissingBonusesProperty;
    private addMissingRepeatableQuestsProperty;
    private addMissingWeaponRepairSkill;
    private addMissingAkiVersionTagToProfile;
    private addMissingArmorRepairSkill;
    private fixNullTraderSalesSums;
    private removeDanglingConditionCounters;
    private removeDanglingBackendCounters;
    getGameConfig(sessionID: string): IGameConfigResponse;
    getServer(): any[];
    private getActiveRepeatableQuests;
}
