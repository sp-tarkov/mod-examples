import { HashUtil } from "../utils/HashUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { ILogger } from "../models/spt/utils/ILogger";
import { IGenerateBotsRequestData } from "../models/eft/bot/IGenerateBotsRequestData";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
import { ConfigServer } from "../servers/ConfigServer";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { BotInventoryGenerator } from "./BotInventoryGenerator";
import { BotHelper } from "../helpers/BotHelper";
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
