import { MinMax } from "../../common/MinMax";
import { IBaseConfig } from "./IBaseConfig";
export interface IBotConfig extends IBaseConfig {
    kind: "aki-bot";
    presetBatch: PresetBatch;
    bosses: string[];
    durability: Durability;
    lootNValue: LootNvalue;
    revenge: Record<string, string[]>;
    pmc: PmcConfig;
    itemSpawnLimits: Record<string, Record<string, number>>;
    equipment: Record<string, Equipment>;
    showTypeInNickname: boolean;
    maxBotCap: number;
    secureContainerAmmoStackCount: number;
}
export interface PresetBatch {
    assault: number;
    bossBully: number;
    bossGluhar: number;
    bossKilla: number;
    bossKojaniy: number;
    bossSanitar: number;
    bossTagilla: number;
    bossKnight: number;
    bossTest: number;
    cursedAssault: number;
    followerBully: number;
    followerGluharAssault: number;
    followerGluharScout: number;
    followerGluharSecurity: number;
    followerGluharSnipe: number;
    followerKojaniy: number;
    followerSanitar: number;
    followerTagilla: number;
    followerBirdEye: number;
    followerBigPipe: number;
    followerTest: number;
    marksman: number;
    pmcBot: number;
    sectantPriest: number;
    sectantWarrior: number;
    gifter: number;
    test: number;
    exUsec: number;
}
export interface Durability {
    default: DefaultDurability;
    pmc: PmcDurability;
    boss: BotDurability;
    follower: BotDurability;
    assault: BotDurability;
    cursedassault: BotDurability;
    marksman: BotDurability;
    pmcbot: BotDurability;
    exusec: BotDurability;
    sectantpriest: BotDurability;
    sectantwarrior: BotDurability;
}
export interface DefaultDurability {
    armor: DefaultArmor;
    weapon: WeaponDurability;
}
export interface DefaultArmor {
    maxDelta: number;
    minDelta: number;
}
export interface WeaponDurability {
    lowestMax: number;
    highestMax: number;
    maxDelta: number;
    minDelta: number;
}
export interface PmcDurability {
    armor: PmcDurabilityArmor;
    weapon: WeaponDurability;
}
export interface PmcDurabilityArmor {
    lowestMaxPercent: number;
    highestMaxPercent: number;
    maxDelta: number;
    minDelta: number;
}
export interface BotDurability {
    armor: ArmorDurability;
    weapon: WeaponDurability;
}
export interface ArmorDurability {
    maxDelta: number;
    minDelta: number;
}
export interface LootNvalue {
    scav: number;
    pmc: number;
}
export interface PmcConfig {
    dynamicLoot: PmcDynamicLoot;
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
export interface PmcDynamicLoot {
    whitelist: string[];
    blacklist: string[];
    moneyStackLimits: Record<string, number>;
}
export interface Equipment {
    blacklist: EquipmentFilterDetails[];
    whitelist: EquipmentFilterDetails[];
}
export interface EquipmentFilterDetails {
    levelRange: MinMax;
    equipment: Record<string, string[]>;
    cartridge: Record<string, string[]>;
}
