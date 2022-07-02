import { BotHelper } from "../helpers/BotHelper";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { Health as PmcHealth } from "../models/eft/common/IPmcData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { Health, Inventory, Skills } from "../models/eft/common/tables/IBotType";
import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
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
    protected databaseServer: DatabaseServer;
    protected botInventoryGenerator: BotInventoryGenerator;
    protected botHelper: BotHelper;
    protected gameEventHelper: GameEventHelper;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, botInventoryGenerator: BotInventoryGenerator, botHelper: BotHelper, gameEventHelper: GameEventHelper, configServer: ConfigServer);
    generate(info: IGenerateBotsRequestData, playerScav?: boolean): IBotBase[];
    protected generateBot(bot: IBotBase, role: string, isPmc: boolean): IBotBase;
    protected generateRandomLevel(min: number, max: number): BotGenerator.IRandomisedBotLevelResult;
    /** Converts health object to the required format */
    protected generateHealth(healthObj: Health, playerScav?: boolean): PmcHealth;
    protected generateSkills(skillsObj: Skills): Skills;
    protected getPmcRole(pmcSide: string): string;
    protected removeChristmasItemsFromBotInventory(nodeInventory: Inventory): void;
    protected generateId(bot: IBotBase): IBotBase;
    protected generateInventoryID(profile: IBotBase): IBotBase;
    protected getPMCDifficulty(requestedDifficulty: string): string;
    protected generateDogtag(bot: IBotBase): IBotBase;
}
export {};
