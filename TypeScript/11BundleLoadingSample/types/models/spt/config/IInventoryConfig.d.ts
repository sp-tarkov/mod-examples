import { IBaseConfig } from "./IBaseConfig";
export interface IInventoryConfig extends IBaseConfig {
    kind: "aki-inventory";
    newItemsMarkedFound: boolean;
}
