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
    private lookup;
    hydrateLookup(lookup: LookupCollection): void;
    getTemplatePrice(x: string): number;
    templatesWithParent(x: string): string[];
    isCategory(x: string): boolean;
    childrenCategories(x: string): string[];
    /**
    * Gets Currency to Ruble conversion Value
    * @param {number} value
    * @param {string} currencyFrom
    * @returns number
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
