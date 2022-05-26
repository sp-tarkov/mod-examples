import { IBaseConfig } from "./IBaseConfig";
export interface IBotConfig extends IBaseConfig {
    kind: "aki-bot";
    presetBatch: PresetBatch;
    bosses: string[];
    durability: Durability;
    lootNValue: LootNvalue;
    pmc: PmcConfig;
    showTypeInNickname: boolean;
    maxBotCap: number;
}
export interface PresetBatch {
    assault: number;
    bossBully: number;
    bossGluhar: number;
    bossKilla: number;
    bossKojaniy: number;
    bossSanitar: number;
    bossTagilla: number;
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
    dynamicLoot: DynamicLoot;
    cartridgeBlacklist: string[];
    difficulty: string;
    isUsec: number;
    chanceSameSideIsHostilePercent: number;
    usecType: string;
    bearType: string;
    maxBackpackLootTotalRub: number;
    maxPocketLootTotalRub: number;
    maxVestLootTotalRub: number;
    types: Types;
}
export interface DynamicLoot {
    whitelist: string[];
    blacklist: string[];
    spawnLimits: Record<string, number>;
    moneyStackLimits: Record<string, number>;
}
export interface Types {
    assault: number;
    cursedAssault: number;
    pmcBot: number;
    exUsec: number;
}
