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
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, jsonUtil: JsonUtil, profileHelper: ProfileHelper, databaseServer: DatabaseServer, botInventoryGenerator: BotInventoryGenerator, botEquipmentFilterService: BotEquipmentFilterService, botHelper: BotHelper, gameEventHelper: GameEventHelper, configServer: ConfigServer);
    /**
     * Generate a player scav bot object
     * @param role e.g. assault / pmcbot
     * @param difficulty easy/normal/hard/impossible
     * @param botTemplate base bot template to use  (e.g. assault/pmcbot)
     * @returns
     */
    generatePlayerScav(role: string, difficulty: string, botTemplate: IBotType): IBotBase;
    generate(sessionId: string, info: IGenerateBotsRequestData): IBotBase[];
    /**
     * Choose if a bot should become a PMC by checking if bot type is allowed to become a Pmc in botConfig.convertFromChances and doing a random int check
     * @param botRole the bot role to check if should be a pmc
     * @returns true if should be a pmc
     */
    protected shouldBotBePmc(botRole: string): boolean;
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
    protected generateBot(bot: IBotBase, role: string, node: IBotType, isPmc: boolean, isPlayerScav?: boolean): IBotBase;
    /**
     * Log the number of PMCs generated to the debug console
     */
    protected logPmcGeneratedCount(output: IBotBase[]): void;
    protected generateRandomLevel(min: number, max: number): BotGenerator.IRandomisedBotLevelResult;
    /**
     * Converts health object to the required format
     * @param healthObj health object from bot json
     * @param playerScav Is a pscav bot being generated
     * @returns PmcHealth object
     */
    protected generateHealth(healthObj: Health, playerScav?: boolean): PmcHealth;
    protected generateSkills(skillsObj: Skills): Skills;
    /**
     * Convert from pmc side (usec/bear) to the side as defined in the bot config (usecType/bearType)
     * @param pmcSide eft side (usec/bear)
     * @returns pmc side as defined in config
     */
    protected getPmcRole(pmcSide: string): string;
    /**
     * Iterate through bots inventory and loot to find and remove christmas items (as defined in GameEventHelper)
     * @param nodeInventory Bots inventory to iterate over
     */
    protected removeChristmasItemsFromBotInventory(nodeInventory: Inventory): void;
    protected generateId(bot: IBotBase): IBotBase;
    protected generateInventoryID(profile: IBotBase): IBotBase;
    protected getPMCDifficulty(requestedDifficulty: string): string;
    /**
     * Add a side-specific (usec/bear) dogtag item to a bots inventory
     * @param bot bot to add dogtag to
     * @returns Bot with dogtag added
     */
    protected generateDogtag(bot: IBotBase): IBotBase;
}
export {};
