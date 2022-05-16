import { GameController } from "../controllers/GameController";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { IGameEmptyCrcRequestData } from "../@types/eft/game/IGameEmptyCrcRequestData";
import { IVersionValidateRequestData } from "../@types/eft/game/IVersionValidateRequestData";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { INullResponseData } from "../@types/eft/httpResponse/INullResponseData";
import { IGameConfigResponse } from "../@types/eft/game/IGameConfigResponse";
import { HttpResponse } from "../utils/HttpResponse";
import { IWatermark } from "../@types/spt/utils/IWatermark";
declare class GameCallbacks {
    private httpResponse;
    private watermark;
    private gameController;
    constructor(httpResponse: HttpResponse, watermark: IWatermark, gameController: GameController);
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
