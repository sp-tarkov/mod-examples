import { BotController } from "../controllers/BotController";
import { IGenerateBotsRequestData } from "../@types/eft/bot/IGenerateBotsRequestData";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { IBotBase } from "../@types/eft/common/tables/IBotBase";
import { HttpResponse } from "../utils/HttpResponse";
export declare class BotCallbacks {
    private botController;
    private httpResponse;
    constructor(botController: BotController, httpResponse: HttpResponse);
    getBotLimit(url: string, info: IEmptyRequestData, sessionID: string): string;
    getBotDifficulty(url: string, info: IEmptyRequestData, sessionID: string): string;
    generateBots(url: string, info: IGenerateBotsRequestData, sessionID: string): IGetBodyResponseData<IBotBase[]>;
    getBotCap(): string;
}
