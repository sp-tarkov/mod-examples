import { Difficulty, IBotType } from "../models/eft/common/tables/IBotType";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotHelper {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected randomUtil: RandomUtil;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, databaseServer: DatabaseServer, randomUtil: RandomUtil, configServer: ConfigServer);
    getBotDifficultySettings(type: string, difficulty: string): Difficulty;
    getBotTemplate(role: string): IBotType;
    getPmcDifficultySettings(type: string, difficulty: string): Difficulty;
    /**
     * Randomise the chance the PMC will attack their own side
     * @param difficultySettings pmc difficulty settings
     */
    randomisePmcHostility(difficultySettings: Difficulty): void;
    isBotPmc(botRole: string): boolean;
    isBotBoss(botRole: string): boolean;
    isBotFollower(botRole: string): boolean;
    /**
     * Add a bot to the FRIENDLY_BOT_TYPES array
     * @param difficultySettings bot settings to alter
     * @param typeToAdd bot type to add to friendly list
     */
    addBotToFriendlyList(difficultySettings: Difficulty, typeToAdd: string): void;
    /**
     * Add a bot to the ENEMY_BOT_TYPES array
     * @param difficultySettings bot settings to alter
     * @param typesToAdd bot type to add to enemy list
     */
    addBotToEnemyList(difficultySettings: Difficulty, typesToAdd: string[], typeBeingEdited: string): void;
    /**
     * Add a bot to the REVENGE_BOT_TYPES array
     * @param difficultySettings bot settings to alter
     * @param typesToAdd bot type to add to revenge list
     */
    addBotToRevengeList(difficultySettings: Difficulty, typesToAdd: string[]): void;
}
