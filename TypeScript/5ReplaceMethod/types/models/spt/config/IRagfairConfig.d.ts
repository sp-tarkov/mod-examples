import { IBaseConfig } from "./IBaseConfig";
export interface IRagfairConfig extends IBaseConfig {
    kind: "aki-ragfair";
    runIntervalSeconds: number;
    sell: Sell;
    traders: Record<string, boolean>;
    dynamic: Dynamic;
}
export interface Sell {
    fees: boolean;
    chance: Chance;
    time: Time;
    reputation: Reputation;
}
export interface Chance {
    base: number;
    overprices: number;
    underpriced: number;
}
export interface Time {
    base: number;
    min: number;
    max: number;
}
export interface Reputation {
    gain: number;
    loss: number;
}
export interface Dynamic {
    expiredOfferThreshold: number;
    offerItemCount: MinMax;
    price: MinMax;
    endTimeSeconds: MinMax;
    condition: Condition;
    stackablePercent: MinMax;
    nonStackableCount: MinMax;
    rating: MinMax;
    currencies: Record<string, number>;
    showAsSingleStack: string[];
    blacklist: Blacklist;
}
export interface MinMax {
    min: number;
    max: number;
}
export interface Condition {
    conditionChance: number;
    min: number;
    max: number;
}
export interface Blacklist {
    /**
     * show/hide trader items that are blacklisted by bsg
     */
    traderItems: boolean;
    custom: string[];
    enableBsgList: boolean;
    enableQuestList: boolean;
}
