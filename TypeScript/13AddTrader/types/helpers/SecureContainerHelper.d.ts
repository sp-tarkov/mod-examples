import { Item } from "../models/eft/common/tables/IItem";
import { ItemHelper } from "./ItemHelper";
export interface OwnerInventoryItems {
    from: Item[];
    to: Item[];
    sameInventory: boolean;
    isMail: boolean;
}
export declare class SecureContainerHelper {
    private itemHelper;
    constructor(itemHelper: ItemHelper);
    getSecureContainerItems(items: Item[]): string[];
}
