import { Item } from "../models/eft/common/tables/IItem";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ItemHelper } from "../helpers/ItemHelper";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
export declare class RagfairAssortGenerator {
    private jsonUtil;
    private hashUtil;
    private itemHelper;
    private databaseServer;
    private generatedAssortItems;
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, itemHelper: ItemHelper, databaseServer: DatabaseServer);
    getAssortItems(): Item[];
    private assortsAreGenerated;
    private generateRagfairAssortItems;
    private createRagfairAssortItem;
}
