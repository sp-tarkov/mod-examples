import { BotGenerator } from "../generators/BotGenerator";
import { BotHelper } from "../helpers/BotHelper";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { IBotCore } from "../models/eft/common/tables/IBotCore";
import { Difficulty } from "../models/eft/common/tables/IBotType";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
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
