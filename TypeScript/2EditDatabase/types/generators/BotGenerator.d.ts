import { BotHelper } from "../helpers/BotHelper";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { ProfileHelper } from "../helpers/ProfileHelper";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { Health as PmcHealth, IBotBase, Skills } from "../models/eft/common/tables/IBotBase";
import { Health, IBotType, Inventory } from "../models/eft/common/tables/IBotType";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { BotEquipmentFilterService } from "../services/BotEquipmentFilterService";
import { PmcAiService } from "../services/PmcAiService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { BotInventoryGenerator } from "./BotInventoryGenerator";
declare namespace BotGenerator {
    interface IRandomisedBotLevelResult {
        level: number;
        exp: number;
    }
}
export declare class BotGenerator {
    protected logger: ILogger;
    protected hashUtil: HashUtil;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected profileHelper: ProfileHelper;
    protected databaseServer: DatabaseServer;
    protected botInventoryGenerator: BotInventoryGenerator;
    protected botEquipmentFilterService: BotEquipmentFilterService;
    protected botHelper: BotHelper;
    protected gameEventHelper: GameEventHelper;
    protected pmcAiService: PmcAiService;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, jsonUtil: JsonUtil, profileHelper: ProfileHelper, databaseServer: DatabaseServer, botInventoryGenerator: BotInventoryGenerator, botEquipmentFilterService: BotEquipmentFilterService, botHelper: BotHelper, gameEventHelper: GameEventHelper, pmcAiService: PmcAiService, configServer: ConfigServer);
    /**
     * Generate a player scav bot object
     * @param role e.g. assault / pmcbot
     * @param difficulty easy/normal/hard/impossible
     * @param botTemplate base bot template to use  (e.g. assault/pmcbot)
     * @returns
     */
    generatePlayerScav(sessionId: string, role: string, difficulty: string, botTemplate: IBotType): IBotBase;
    /**
     * Generate an array of bot objects for populate a raid with
     * @param sessionId session id
     * @param info request object
     * @returns bot array
     */
    generate(sessionId: string, info: IGenerateBotsRequestData): IBotBase[];
    /**
     * Get a randomised PMC side based on bot config value 'isUsec'
     * @returns pmc side as string
     */
    protected getRandomisedPmcSide(): string;
    /**
     * Get a clone of the database\bots\base.json file
     * @returns IBotBase object
     */
    protected getCloneOfBotBase(): IBotBase;
    /**
     * Create a IBotBase object with equipment/loot/exp etc
     * @param sessionId Session id
     * @param bot bots base file
     * @param role botRole bot will use
     * @param node Bot template from db/bots/x.json
     * @param isPmc Is bot to be a PMC
     * @param isPlayerScav is bot to be a p scav bot
     * @returns IBotBase object
     */
    protected generateBot(sessionId: string, bot: IBotBase, role: string, node: IBotType, isPmc: boolean, isPlayerScav?: boolean): IBotBase;
    /**
     * Log the number of PMCs generated to the debug console
     * @param output Generated bot array, ready to send to client
     */
    protected logPmcGeneratedCount(output: IBotBase[]): void;
    /**
     * Return a randomised bot level and exp value
     * @param role botRole being generated for
     * @param min Min exp value
     * @param max Max exp value
     * @returns IRandomisedBotLevelResult object
     */
    protected generateRandomLevel(role: string, min: number, max: number): BotGenerator.IRandomisedBotLevelResult;
    /**
     * Converts health object to the required format
     * @param healthObj health object from bot json
     * @param playerScav Is a pscav bot being generated
     * @returns PmcHealth object
     */
    protected generateHealth(healthObj: Health, playerScav?: boolean): PmcHealth;
    protected generateSkills(skillsObj: Skills): Skills;
    /**
     * Iterate through bots inventory and loot to find and remove christmas items (as defined in GameEventHelper)
     * @param nodeInventory Bots inventory to iterate over
     */
    protected removeChristmasItemsFromBotInventory(nodeInventory: Inventory): void;
    /**
     * Generate a random Id for a bot and apply to bots _id and aid value
     * @param bot bot to update
     * @returns updated IBotBase object
     */
    protected generateId(bot: IBotBase): IBotBase;
    protected generateInventoryID(profile: IBotBase): IBotBase;
    /**
     * Get the difficulty passed in, if its not "asoline", get selected difficulty from config
     * @param requestedDifficulty
     * @returns
     */
    protected getPMCDifficulty(requestedDifficulty: string): string;
    /**
     * Add a side-specific (usec/bear) dogtag item to a bots inventory
     * @param bot bot to add dogtag to
     * @returns Bot with dogtag added
     */
    protected generateDogtag(bot: IBotBase): IBotBase;
}
export {};
