import { Difficulty } from "../models/eft/common/tables/IBotType";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotHelper {
    private logger;
    private jsonUtil;
    private databaseServer;
    private randomUtil;
    private configServer;
    private botConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, databaseServer: DatabaseServer, randomUtil: RandomUtil, configServer: ConfigServer);
    getBotDifficultySettings(type: string, difficulty: string): Difficulty;
    getPmcDifficultySettings(type: string, difficulty: string): Difficulty;
    randomisePmcHostility(difficultySettings: Difficulty): void;
    isBotPmc(botRole: string): boolean;
    isBotBoss(botRole: string): boolean;
    isBotFollower(botRole: string): boolean;
    addBotToFriendlyList(difficultySettings: Difficulty, typeToAdd: string): void;
}
