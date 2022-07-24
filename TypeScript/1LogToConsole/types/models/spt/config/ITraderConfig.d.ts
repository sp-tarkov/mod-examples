import { IBaseConfig } from "./IBaseConfig";
export interface ITraderConfig extends IBaseConfig {
    kind: "aki-trader";
    updateTime: UpdateTime[];
    updateTimeDefault: number;
    traderPriceMultipler: number;
    minDurabilityForSale: number;
    fence: FenceConfig;
}
export interface UpdateTime {
    traderId: string;
    seconds: number;
}
export interface FenceConfig {
    assortSize: number;
    maxPresetsCount: number;
    presetPriceMult: number;
    blacklist: string[];
}
