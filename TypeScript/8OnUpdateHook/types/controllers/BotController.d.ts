import { BotGenerator } from "../generators/BotGenerator";
import { BotHelper } from "../helpers/BotHelper";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { IBotCore } from "../models/eft/common/tables/IBotCore";
import { Difficulty } from "../models/eft/common/tables/IBotType";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { BotGenerationCacheService } from "../services/BotGenerationCacheService";
import { PmcAiService } from "../services/PmcAiService";
export declare class BotController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected botGenerator: BotGenerator;
    protected botHelper: BotHelper;
    protected pmcAiService: PmcAiService;
    protected botGenerationCacheService: BotGenerationCacheService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, botGenerator: BotGenerator, botHelper: BotHelper, pmcAiService: PmcAiService, botGenerationCacheService: BotGenerationCacheService, configServer: ConfigServer);
    /**
     * Return the number of bot loadout varieties to be generated
     * @param type bot Type we want the loadout gen count for
     * @returns
     */
    getBotPresetGenerationLimit(type: string): number;
    getBotCoreDifficulty(): IBotCore;
    /**
     * Get bot difficulty settings
     * adjust PMC settings to ensure they engage the correct bot types
     * @param type what bot the server is requesting settings for
     * @param difficulty difficulty level server requested settings for
     * @returns Difficulty object
     */
    getBotDifficulty(type: string, difficulty: string): Difficulty;
    protected getPmcDifficultySettings(pmcType: "bear" | "usec", difficulty: string, usecType: string, bearType: string): Difficulty;
    generate(sessionId: string, info: IGenerateBotsRequestData): IBotBase[];
    getBotCap(): number;
}
