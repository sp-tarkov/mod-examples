import { MinMax } from "../../common/MinMax";
export interface IPmcConfig {
    dynamicLoot: DynamicLoot;
    useDifficultyOverride: boolean;
    difficulty: string;
    looseWeaponInBackpackChancePercent: number;
    looseWeaponInBackpackLootMinMax: MinMax;
    isUsec: number;
    chanceSameSideIsHostilePercent: number;
    /** key: location, value: type for usec/bear */
    pmcType: Record<string, PmcTypes>;
    maxBackpackLootTotalRub: number;
    maxPocketLootTotalRub: number;
    maxVestLootTotalRub: number;
    convertIntoPmcChance: Record<string, MinMax>;
    enemyTypes: string[];
}
export interface PmcTypes {
    usec: string;
    bear: string;
}
export interface DynamicLoot {
    whitelist: string[];
    blacklist: string[];
    moneyStackLimits: Record<string, number>;
}
