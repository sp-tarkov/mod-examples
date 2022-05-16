import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ILogger } from "../@types/spt/utils/ILogger";
import { IGenerateBotsRequestData } from "../@types/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../@types/eft/common/tables/IBotBase";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
import { ConfigServer } from "../servers/ConfigServer";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { BotInventoryGenerator } from "./BotInventoryGenerator";
import { BotHelper } from "../helpers/BotHelper";
declare namespace BotGenerator {
    interface IRandomisedBotLevelResult {
        level: number;
        exp: number;
    }
}
export declare class BotGenerator {
    private logger;
    private hashUtil;
    private randomUtil;
    private jsonUtil;
    private databaseServer;
    private botInventoryGenerator;
    private botHelper;
    private gameEventHelper;
    private configServer;
    private botConfig;
    constructor(logger: ILogger, hashUtil: HashUtil, randomUtil: RandomUtil, jsonUtil: JsonUtil, databaseServer: DatabaseServer, botInventoryGenerator: BotInventoryGenerator, botHelper: BotHelper, gameEventHelper: GameEventHelper, configServer: ConfigServer);
    generate(info: IGenerateBotsRequestData, playerScav?: boolean): IBotBase[];
    generateBot(bot: IBotBase, role: string, isPmc: boolean): IBotBase;
    generateRandomLevel(min: number, max: number): BotGenerator.IRandomisedBotLevelResult;
    /** Converts health object to the required format */
    private generateHealth;
    private generateSkills;
    private getPmcRole;
    private removeChristmasItemsFromBotInventory;
    private generateId;
    private generateInventoryID;
    private getPMCDifficulty;
    private generateDogtag;
}
export {};
