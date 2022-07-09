import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { ILogger } from "../models/spt/utils/ILogger";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class CustomItemService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    private customItems;
    constructor(logger: ILogger, databaseServer: DatabaseServer);
    add(itemToAdd: ITemplateItem): void;
    get(): ITemplateItem[];
}
