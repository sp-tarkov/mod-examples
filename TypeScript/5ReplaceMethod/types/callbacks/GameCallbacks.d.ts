import { GameController } from "../controllers/GameController";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IGameEmptyCrcRequestData } from "../models/eft/game/IGameEmptyCrcRequestData";
import { IVersionValidateRequestData } from "../models/eft/game/IVersionValidateRequestData";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "../models/eft/httpResponse/INullResponseData";
import { IGameConfigResponse } from "../models/eft/game/IGameConfigResponse";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
import { IWatermark } from "../models/spt/utils/IWatermark";
declare class GameCallbacks 
{
    private httpResponse;
    private watermark;
    private gameController;
    constructor(httpResponse: HttpResponseUtil, watermark: IWatermark, gameController: GameController);
    versionValidate(url: string, info: IVersionValidateRequestData, sessionID: string): INullResponseData;
    gameStart(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameLogout(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getGameConfig(url: string, info: IGameEmptyCrcRequestData, sessionID: string): IGetBodyResponseData<IGameConfigResponse>;
    getServer(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    validateGameVersion(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    gameKeepalive(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<any>;
    getVersion(url: string, info: IEmptyRequestData, sessionID: string): string;
}
export { GameCallbacks };
