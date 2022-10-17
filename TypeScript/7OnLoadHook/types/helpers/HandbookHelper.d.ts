import { DatabaseServer } from "../servers/DatabaseServer";
declare class LookupItem {
    byId: Record<number, string>;
    byParent: Record<string, string[]>;
    constructor();
}
export declare class LookupCollection {
    items: LookupItem;
    categories: LookupItem;
    constructor();
}
export declare class HandbookHelper {
    protected databaseServer: DatabaseServer;
    protected handbookPriceCache: LookupCollection;
    constructor(databaseServer: DatabaseServer);
    hydrateLookup(): void;
    /**
     * Get price from internal cache, if cache empty look up price directly in handbook (expensive)
     * If no values found, return 1
     * @param tpl item tpl to look up price for
     * @returns price in roubles
     */
    getTemplatePrice(tpl: string): number;
    /**
     * all items in template with the given parent category
     * @param x
     * @returns string array
     */
    templatesWithParent(x: string): string[];
    /**
     * Does category exist in handbook cache
     * @param category
     * @returns true if exists in cache
     */
    isCategory(category: string): boolean;
    childrenCategories(x: string): string[];
    /**
    * Convert currency into roubles
    * @param {number} value
    * @param {string} currencyFrom
    * @returns get rouble value of inputted currency
    */
    inRUB(value: number, currencyFrom: string): number;
    /**
     * Gets Ruble to Currency conversion Value
     * @param {number} value
     * @param {string} currencyTo
     * @returns number
     */
    fromRUB(value: number, currencyTo: string): number;
}
export {};
