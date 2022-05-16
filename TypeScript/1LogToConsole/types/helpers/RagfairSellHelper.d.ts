import { SellResult } from "../@types/eft/ragfair/IRagfairOffer";
import { IRagfairConfig } from "../@types/spt/config/IRagfairConfig";
import { ILogger } from "../@types/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { RandomUtil } from "../utils/RandomUtil";
import { TimeUtil } from "../utils/TimeUtil";
export declare class RagfairSellHelper {
    private logger;
    private randomUtil;
    private timeUtil;
    private configServer;
    ragfairConfig: IRagfairConfig;
    constructor(logger: ILogger, randomUtil: RandomUtil, timeUtil: TimeUtil, configServer: ConfigServer);
    calculateSellChance(baseChance: number, offerPrice: number, requirementsPriceInRub: number): number;
    rollForSale(sellChance: number, count: number): SellResult[];
}
