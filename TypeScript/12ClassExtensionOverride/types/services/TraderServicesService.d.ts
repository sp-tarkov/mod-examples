import { ITraderServiceModel } from "@spt-aki/models/spt/services/ITraderServiceModel";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
export declare class TraderServicesService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    constructor(logger: ILogger, databaseServer: DatabaseServer);
    getTraderServices(traderId: string): ITraderServiceModel[];
}
