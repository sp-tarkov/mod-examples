import { Inventory as PmcInventory } from "../../eft/common/IPmcData";
import { Inventory, Chances, Generation } from "../../eft/common/tables/IBotType";
export interface IBotGenerator {
    generateInventory(templateInventory: Inventory, equipmentChances: Chances, generation: Generation, botRole: string, isPmc: boolean): PmcInventory;
}
export interface IExhaustableArray<T> {
    getRandomValue(): T;
    getFirstValue(): T;
    hasValues(): boolean;
}
