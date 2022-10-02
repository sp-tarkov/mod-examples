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
    /**
     * Get difficulty settings for desired bot type, if not found use assault bot types
     * @param type bot type to retreive difficulty of
     * @param difficulty difficulty to get settings for (easy/normal etc)
     * @returns Difficulty object
     */
    getBotDifficultySettings(type: string, difficulty: string): Difficulty;
    /**
     * Get a template object for the specified botRole from bots.types db
     * @param role botRole to get template for
     * @returns IBotType object
     */
    getBotTemplate(role: string): IBotType;
    /**
     * Get difficulty settings for a PMC
     * @param type "usec" / "bear"
     * @param difficulty what difficulty to retrieve
     * @returns Difficulty object
     */
    getPmcDifficultySettings(type: string, difficulty: string): Difficulty;
    /**
     * Translate chosen value from pre-raid difficulty dropdown into bot difficulty value
     * @param dropDownDifficulty Dropdown difficulty value to convert
     * @returns bot difficulty
     */
    convertBotDifficultyDropdownToBotDifficulty(dropDownDifficulty: string): string;
    /**
     * Choose a random difficulty from - easy/normal/hard/impossible
     * @returns random difficulty
     */
    chooseRandomDifficulty(): string;
    /**
     * Randomise the chance the PMC will attack their own side
     * Look up value in bot.json/chanceSameSideIsHostilePercent
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
     * Add a bot to the ENEMY_BOT_TYPES array, do not add itself if its on the enemy list
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
    /**
     * Choose if a bot should become a PMC by checking if bot type is allowed to become a Pmc in botConfig.convertFromChances and doing a random int check
     * @param botRole the bot role to check if should be a pmc
     * @returns true if should be a pmc
     */
    shouldBotBePmc(botRole: string): boolean;
}
