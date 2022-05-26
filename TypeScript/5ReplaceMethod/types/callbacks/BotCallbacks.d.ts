import { BotController } from "../controllers/BotController";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IEmptyRequestData } from "../models/eft/common/IEmptyRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { IGetBodyResponseData } from "../models/eft/httpResponse/IGetBodyResponseData";
import { HttpResponseUtil } from "../utils/HttpResponseUtil";
export declare class BotCallbacks {
    private botController;
    private httpResponse;
    constructor(botController: BotController, httpResponse: HttpResponseUtil);
    getBotLimit(url: string, info: IEmptyRequestData, sessionID: string): string;
    getBotDifficulty(url: string, info: IEmptyRequestData, sessionID: string): string;
    generateBots(url: string, info: IGenerateBotsRequestData, sessionID: string): IGetBodyResponseData<IBotBase[]>;
    getBotCap(): string;
}
