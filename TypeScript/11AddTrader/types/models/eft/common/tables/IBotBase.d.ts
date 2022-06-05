import { BackendCounter, Bonus } from "../IPmcData";
import { Item } from "./IItem";
export interface IBotBase {
    _id: string;
    aid: string;
    savage: any;
    Info: Info;
    Customization: Customization;
    Health: Health;
    Inventory: Inventory;
    Skills: Skills;
    Stats: Stats;
    Encyclopedia: any;
    ConditionCounters: ConditionCounters;
    BackendCounters: Record<string, BackendCounter>;
    InsuredItems: any[];
    Hideout: Hideout;
    Bonuses: Bonus[];
}
export interface Info {
    Nickname: string;
    LowerNickname: string;
    Side: string;
    Voice: string;
    Level: number;
    Experience: number;
    RegistrationDate: number;
    GameVersion: string;
    AccountType: number;
    MemberCategory: number;
    lockedMoveCommands: boolean;
    SavageLockTime: number;
    LastTimePlayedAsSavage: number;
    Settings: Settings;
    NicknameChangeDate: number;
    NeedWipeOptions: any[];
    lastCompletedWipe: any;
    BannedState: boolean;
    BannedUntil: number;
    IsStreamerModeAvailable: boolean;
}
export interface Settings {
    Role: string;
    BotDifficulty: string;
    Experience: number;
    StandingForKill: number;
    AggressorBonus: number;
}
export interface Customization {
    Head: string;
    Body: string;
    Feet: string;
    Hands: string;
}
export interface Health {
}
export interface Inventory {
    items: Item[];
    equipment: string;
    stash: string;
    sortingTable: string;
    questRaidItems: string;
    questStashItems: string;
    fastPanel: FastPanel;
}
export interface FastPanel {
}
export interface Skills {
    Common: any[];
    Mastering: any[];
    Points: number;
}
export interface Stats {
    SessionCounters: SessionCounters;
    OverallCounters: OverallCounters;
}
export interface SessionCounters {
    Items: any[];
}
export interface OverallCounters {
    Items: any[];
}
export interface ConditionCounters {
    Counters: any[];
}
export interface Hideout {
    Production: Production;
    Areas: Area[];
}
export interface Production {
}
export interface Area {
    type: number;
    level: number;
    active: boolean;
    passiveBonusesEnabled: boolean;
    completeTime: number;
    constructing: boolean;
    slots: any[];
    lastRecipe: any;
}
