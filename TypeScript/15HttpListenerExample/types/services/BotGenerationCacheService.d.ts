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
    protected storedBots: IBotBase[];
    constructor(logger: ILogger, randomUtil: RandomUtil, jsonUtil: JsonUtil, botHelper: BotHelper);
    /**
     * Store array of bots in cache, shuffle results before storage
     * @param botsToStore
     */
    storeBots(botsToStore: IBotBase[]): void;
    /**
     * Find and return a bot based on its role
     * Remove bot from internal array so it can't be retreived again
     * @param role role to retreive (assault/bossTagilla etc)
     * @returns IBotBase object
     */
    getBot(role: string): IBotBase[];
    /**
     * Find a bot by its index from cache
     * @param indexOfBotToReturn index to find bot by
     * @returns bot profile
     */
    protected getBotFromCache(indexOfBotToReturn: number): IBotBase;
    /**
     * Remove bot profile by index from cache
     * @param indexOfBotToReturn Index of bot profile to remove
     */
    protected removeBotFromCache(indexOfBotToReturn: number): void;
    /**
     * Get index of bot profile that matches criteria
     * @param role role of bot we want
     * @param getPmc is requested bot a pmc
     * @returns index of found bot
     */
    protected getIndexOfBotToReturn(role: string, getPmc: boolean): number;
    /**
     * Remove all cached bot profiles
     */
    clearStoredBots(): void;
    /**
     * Does cache have bots
     * @returns true if empty
     */
    cacheIsEmpty(): boolean;
}
