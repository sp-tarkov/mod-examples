import { IBaseConfig } from "./IBaseConfig";
export interface IRepairConfig extends IBaseConfig {
    kind: "aki-repair";
    priceMultiplier: number;
}
