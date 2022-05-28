import { BotHelper } from "../helpers/BotHelper";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { BotInventoryGenerator } from "./BotInventoryGenerator";
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
    private generateBot;
    private generateRandomLevel;
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
