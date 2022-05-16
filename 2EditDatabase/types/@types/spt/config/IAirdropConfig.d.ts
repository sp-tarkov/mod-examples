import { IBaseConfig } from "./IBaseConfig";
export interface IAirdropConfig extends IBaseConfig {
    kind: "aki-airdrop";
    airdropChancePercent: AirdropChancePercent;
    airdropMinOpenHeight: number;
    airdropMaxOpenHeight: number;
    planeMinFlyHeight: number;
    planeMaxFlyHeight: number;
    planeVolume: number;
    airdropMinStartTimeSeconds: number;
    airdropMaxStartTimeSeconds: number;
}
export interface AirdropChancePercent {
    bigmap: number;
    woods: number;
    lighthouse: number;
    shoreline: number;
    interchange: number;
    reserve: number;
}
