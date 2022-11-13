import { ApplicationContext } from "../context/ApplicationContext";
import { BotGenerator } from "../generators/BotGenerator";
import { BotDifficultyHelper } from "../helpers/BotDifficultyHelper";
import { BotHelper } from "../helpers/BotHelper";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { IBotCore } from "../models/eft/common/tables/IBotCore";
import { Difficulty } from "../models/eft/common/tables/IBotType";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { BotGenerationCacheService } from "../services/BotGenerationCacheService";
import { LocalisationService } from "../services/LocalisationService";
import { JsonUtil } from "../utils/JsonUtil";
export declare class BotController {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected botGenerator: BotGenerator;
    protected botHelper: BotHelper;
    protected botDifficultyHelper: BotDifficultyHelper;
    protected botGenerationCacheService: BotGenerationCacheService;
    protected localisationService: LocalisationService;
    protected weightedRandomHelper: WeightedRandomHelper;
    protected configServer: ConfigServer;
    protected applicationContext: ApplicationContext;
    protected jsonUtil: JsonUtil;
    protected botConfig: IBotConfig;
    static readonly pmcTypeLabel = "PMC";
    constructor(logger: ILogger, databaseServer: DatabaseServer, botGenerator: BotGenerator, botHelper: BotHelper, botDifficultyHelper: BotDifficultyHelper, botGenerationCacheService: BotGenerationCacheService, localisationService: LocalisationService, weightedRandomHelper: WeightedRandomHelper, configServer: ConfigServer, applicationContext: ApplicationContext, jsonUtil: JsonUtil);
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
    /**
     * Generate bot profiles and store in cache
     * @param sessionId Session id
     * @param info bot generation request info
     * @returns IBotBase array
     */
    generate(sessionId: string, info: IGenerateBotsRequestData): IBotBase[];
    /**
     * Get the max number of bots allowed on a map
     * Looks up location player is entering when getting cap value
     * @returns cap number
     */
    getBotCap(): number;
    getPmcBotTypes(): Record<string, Record<string, Record<string, number>>>;
}
