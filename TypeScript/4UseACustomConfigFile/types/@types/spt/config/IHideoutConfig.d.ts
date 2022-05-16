import { IBaseConfig } from "./IBaseConfig";
export interface IHideoutConfig extends IBaseConfig {
    kind: "aki-hideout";
    runIntervalSeconds: number;
    scavCase: ScavCase;
    fuelDrainRateMultipler: number;
}
export interface ScavCase {
    rewardParentBlacklist: string[];
    rewardItemBlacklist: any[];
    ammoRewards: AmmoRewards;
    moneyRewards: MoneyRewards;
}
export interface AmmoRewards {
    giveMultipleOfTen: boolean;
    minAmount: number;
}
export interface MoneyRewards {
    enabled: boolean;
    rub: MinMax;
    usd: MinMax;
    eur: MinMax;
}
export interface MinMax {
    min: number;
    max: number;
}
