import { SellResult } from "../models/eft/ragfair/IRagfairOffer";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class RagfairSellHelper {
    private logger;
    private randomUtil;
    private timeUtil;
    private configServer;
    private ragfairConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, timeUtil: TimeUtil, configServer: ConfigServer);
    calculateSellChance(baseChance: number, offerPrice: number, requirementsPriceInRub: number): number;
    rollForSale(sellChance: number, count: number): SellResult[];
}
