import { BotHelper } from "../helpers/BotHelper";
import { IBotBase } from "../models/eft/common/tables/IBotBase";
import { ILogger } from "../models/spt/utils/ILogger";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
export declare class BotGenerationCacheService {
    protected logger: ILogger;
    protected randomUtil: RandomUtil;
    protected jsonUtil: JsonUtil;
    protected botHelper: BotHelper;
    protected storedBots: Map<string, IBotBase[]>;
    constructor(logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, botHelper: BotHelper);
    /**
     * Store array of bots in cache, shuffle results before storage
     * @param botsToStore Bots we want to store in the cache
     */
    storeBots(botsToStore: IBotBase[]): void;
    /**
     * Find and return a bot based on its role
     * Remove bot from internal array so it can't be retreived again
     * @param role role to retreive (assault/bossTagilla etc)
     * @returns IBotBase object
     */
    getBot(role: string): IBotBase;
    /**
     * Remove all cached bot profiles
     */
    clearStoredBots(): void;
    /**
     * Does cache have bots
     * @returns true if empty
     */
    cacheHasBotOfRole(role: string): boolean;
}
