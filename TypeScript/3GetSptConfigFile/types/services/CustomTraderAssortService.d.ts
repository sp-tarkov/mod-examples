import { CustomTraderAssortData } from "../models/spt/services/CustomTraderAssortData";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class CustomTraderAssortService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    private customAssorts;
    constructor(logger: ILogger, databaseServer: DatabaseServer);
    /**
     * Add assorts to a specific trader
     */
    add(assortsToAdd: CustomTraderAssortData): void;
    get(): CustomTraderAssortData[];
}
