import { IBaseConfig } from "./IBaseConfig";
export interface ITraderConfig extends IBaseConfig {
    kind: "aki-trader";
    updateTime: UpdateTime[];
    updateTimeDefault: number;
    fenceAssortSize: number;
    fenceMaxPresetsCount: number;
    fencePresetPriceMult: number;
    minDurabilityForSale: number;
    fenceItemIgnoreList: string[];
}
export interface UpdateTime {
    traderId: string;
    seconds: number;
}
