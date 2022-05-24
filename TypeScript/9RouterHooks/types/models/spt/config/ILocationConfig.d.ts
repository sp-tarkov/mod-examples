import { IBaseConfig } from "./IBaseConfig";
export interface ILocationConfig extends IBaseConfig {
    kind: "aki-location";
    looseLootMultiplier: LootMultiplier;
    staticLootMultiplier: LootMultiplier;
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
