import { IRagfairOffer } from "../models/eft/ragfair/IRagfairOffer";
export declare class RagfairCategoriesService {
    updateCategories(offers: IRagfairOffer[]): void;
    protected categories: Record<string, number>;
    getCategories(): Record<string, number>;
    getCategoryByItemId(itemId: string): number;
    resetCategories(): void;
    setCategoryValue(itemId: string, newValue: number): void;
    incrementCategory(itemId: string): void;
}
