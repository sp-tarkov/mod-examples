import { MinMax } from "../../common/MinMax";
export interface IPmcConfig {
    dynamicLoot: DynamicLoot;
    useDifficultyOverride: boolean;
    difficulty: string;
    looseWeaponInBackpackChancePercent: number;
    looseWeaponInBackpackLootMinMax: MinMax;
    isUsec: number;
    chanceSameSideIsHostilePercent: number;
    usecType: string;
    bearType: string;
    maxBackpackLootTotalRub: number;
    maxPocketLootTotalRub: number;
    maxVestLootTotalRub: number;
    convertIntoPmcChance: Record<string, MinMax>;
    enemyTypes: string[];
}
export interface DynamicLoot {
    whitelist: string[];
    blacklist: string[];
    moneyStackLimits: Record<string, number>;
}
