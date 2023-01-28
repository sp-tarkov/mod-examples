import { BossLocationSpawn, Wave } from "../../../models/eft/common/ILocationBase";
import { IBaseConfig } from "./IBaseConfig";
export interface ILocationConfig extends IBaseConfig {
    kind: "aki-location";
    fixEmptyBotWaves: boolean;
    fixRoguesTakingAllSpawnsOnLighthouse: boolean;
    lighthouseRogueSpawnTimeSeconds: number;
    looseLootMultiplier: LootMultiplier;
    staticLootMultiplier: LootMultiplier;
    customWaves: CustomWaves;
    /** Open zones to add to map */
    openZones: Record<string, string[]>;
    /** Key = map id, value = item tpls that should only have one forced loot spawn position */
    forcedLootSingleSpawnById: Record<string, string[]>;
}
export interface CustomWaves {
    boss: Record<string, BossLocationSpawn[]>;
    normal: Record<string, Wave[]>;
}
export interface LootMultiplier {
    bigmap: number;
    develop: number;
    factory4_day: number;
    factory4_night: number;
    interchange: number;
    laboratory: number;
    rezervbase: number;
    shoreline: number;
    woods: number;
    hideout: number;
    lighthouse: number;
    privatearea: number;
    suburbs: number;
    tarkovstreets: number;
    terminal: number;
    town: number;
}
