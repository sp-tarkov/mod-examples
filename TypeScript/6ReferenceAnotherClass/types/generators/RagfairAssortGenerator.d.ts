import { ItemHelper } from "../helpers/ItemHelper";
import { Item } from "../models/eft/common/tables/IItem";
import { DatabaseServer } from "../servers/DatabaseServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
export declare class RagfairAssortGenerator {
    private jsonUtil;
    private hashUtil;
    private itemHelper;
    private databaseServer;
    private generatedAssortItems;
    constructor(jsonUtil: JsonUtil, hashUtil: HashUtil, itemHelper: ItemHelper, databaseServer: DatabaseServer);
    /**
     * Get an array of unique items that can be sold on the flea
     * @returns array of unique items
     */
    getAssortItems(): Item[];
    private assortsAreGenerated;
    /**
     * Generate an array of items the flea can sell
     * @returns array of unique items
     */
    private generateRagfairAssortItems;
    private createRagfairAssortItem;
}
