import { IPmcData } from "../models/eft/common/IPmcData";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class GameHelper {
    protected logger: ILogger;
    constructor(logger: ILogger);
    /**
     * Remove condition conters no longer used
     * @param pmcProfile profile to remove old counters from
     */
    removeDanglingConditionCounters(pmcProfile: IPmcData): void;
}
