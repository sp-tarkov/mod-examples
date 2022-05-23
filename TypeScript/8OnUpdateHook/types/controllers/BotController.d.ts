import { DatabaseServer } from "../servers/DatabaseServer";
import { Difficulty } from "../models/eft/common/tables/IBotType";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { IBotCore } from "../models/eft/common/tables/IBotCore";
import { ConfigServer } from "../servers/ConfigServer";
import { BotHelper } from "../helpers/BotHelper";
import { BotGenerator } from "../generators/BotGenerator";
export declare class BotController {
    private databaseServer;
    private botGenerator;
    private botHelper;
    private configServer;
    private botConfig;
    constructor(databaseServer: DatabaseServer, botGenerator: BotGenerator, botHelper: BotHelper, configServer: ConfigServer);
    getBotLimit(type: string): number;
    getBotDifficulty(type: string, difficulty: string): IBotCore | Difficulty;
    generate(info: IGenerateBotsRequestData, playerScav?: boolean): IBotBase[];
    getBotCap(): number;
}
