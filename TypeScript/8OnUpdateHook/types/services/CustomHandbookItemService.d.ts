import { HandbookItem } from "../models/eft/common/tables/IHandbookBase";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class CustomHandbookItemService {
    protected logger: ILogger;
    private customHandbookItems;
    constructor(logger: ILogger);
    /**
     * Add handbook item
     * @param handbookItem item to add
    */
    add(handbookItem: HandbookItem): void;
    get(): HandbookItem[];
}
