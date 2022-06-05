import { IRagfairOffer } from "../ragfair/IRagfairOffer";
import { IPmcDataRepeatableQuest } from "./tables/IRepeatableQuests";
import { Item, Upd } from "./tables/IItem";
import { HideoutAreas } from "../../enums/HideoutAreas";
import { MemberCategory } from "../../enums/MemberCategory";
export interface IPmcData {
    _id: string;
    aid: string;
    savage: string;
    Info: Info;
    Customization: Customization;
    Health: Health;
    Inventory: Inventory;
    Skills: Skills;
    Stats: Stats;
    Encyclopedia: Record<string, boolean>;
    ConditionCounters: ConditionCounters;
    BackendCounters: Record<string, BackendCounter>;
    InsuredItems: InsuredItem[];
    Hideout: Hideout;
    Bonuses: Bonus[];
    Notes: Notes;
    Quests: Quest[];
    TradersInfo: Record<string, TraderInfo>;
    RagfairInfo: RagfairInfo;
    WishList: string[];
    RepeatableQuests: IPmcDataRepeatableQuest[];
    CarExtractCounts: CarExtractCounts;
    SurvivorClass: SurvivorClass;
}
export declare enum SurvivorClass {
    Unknown = 0,
    Neutralizer = 1,
    Marauder = 2,
    Paramedic = 3,
    Survivor = 4
}
export interface Info {
    EntryPoint: string;
    Nickname: string;
    LowerNickname: string;
    Side: string;
    Voice: string;
    Level: number;
    Experience: number;
    RegistrationDate: number;
    GameVersion: string;
    AccountType: number;
    MemberCategory: MemberCategory;
    lockedMoveCommands: boolean;
    SavageLockTime: number;
    LastTimePlayedAsSavage: number;
    Settings: Settings;
    NicknameChangeDate: number;
    IsStreamerModeAvailable: boolean;
    Bans: IBan[];
    BannedState: boolean;
    BannedUntil: number;
}
export interface Settings {
    Role: string;
    BotDifficulty: string;
    Experience: number;
    StandingForKill: number;
    AggressorBonus: number;
}
export interface IBan {
    type: BanType;
    dateTime: number;
}
export declare enum BanType {
    Chat = 0,
    RagFair = 1,
    Voip = 2,
    Trading = 3,
    Online = 4,
    Friends = 5,
    ChangeNickname = 6
}
export interface Notes {
    Notes: Note[];
}
export interface Note {
    Time: number;
    Text: string;
}
export interface Customization {
    Head: string;
    Body: string;
    Feet: string;
    Hands: string;
}
export interface Health {
    Hydration: CurrentMax;
    Energy: CurrentMax;
    Temperature: CurrentMax;
    BodyParts: BodyPartsHealth;
    UpdateTime: number;
}
export interface BodyPartsHealth {
    Head: BodyPartHealth;
    Chest: BodyPartHealth;
    Stomach: BodyPartHealth;
    LeftArm: BodyPartHealth;
    RightArm: BodyPartHealth;
    LeftLeg: BodyPartHealth;
    RightLeg: BodyPartHealth;
}
export interface BodyPartHealth {
    Health: CurrentMax;
    Effects?: Record<string, number>;
}
export interface CurrentMax {
    Current: number;
    Maximum: number;
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
    Common: Common[];
    Mastering: Mastering[];
    Bonuses?: any[];
    Points: number;
}
export interface Common {
    Id: string;
    Progress: number;
    PointsEarnedDuringSession: number;
    LastAccess: number;
}
export interface Mastering {
    Id: string;
    Progress: number;
}
export interface Stats {
    CarriedQuestItems: string[];
    Victims: Victim[];
    TotalSessionExperience: number;
    LastSessionDate: number;
    SessionCounters: SessionCounters;
    OverallCounters: OverallCounters;
    SessionExperienceMult?: number;
    ExperienceBonusMult?: number;
    Aggressor?: Aggressor;
    DroppedItems?: IDroppedItem[];
    FoundInRaidItems?: FoundInRaidItem[];
    DamageHistory?: DamageHistory;
    DeathCause?: DeathCause;
    LastPlayerState?: LastPlayerState;
    TotalInGameTime: number;
    SurvivorClass?: string;
}
export interface IDroppedItem {
    QuestId: string;
    ItemId: string;
    ZoneId: string;
}
export interface FoundInRaidItem {
    QuestId: string;
    ItemId: string;
}
export interface Victim {
    AccountId: string;
    ProfileId: string;
    Name: string;
    Side: string;
    BodyPart: string;
    Time: string;
    Distance: number;
    Level: number;
    Weapon: string;
    Role: string;
}
export interface SessionCounters {
    Items: CounterKeyValue[];
}
export interface OverallCounters {
    Items: CounterKeyValue[];
}
export interface CounterKeyValue {
    Key: string[];
    Value: number;
}
export interface Aggressor {
    AccountId: string;
    ProfileId: string;
    MainProfileNickname: string;
    Name: string;
    Side: string;
    BodyPart: string;
    HeadSegment: string;
    WeaponName: string;
    Category: string;
}
export interface DamageHistory {
    LethalDamagePart: string;
    LethalDamage: LethalDamage;
    BodyParts: BodyPartsDamageHistory;
}
export interface LethalDamage {
    Amount: number;
    Type: string;
    SourceId: string;
    OverDamageFrom: string;
    Blunt: boolean;
    ImpactsCount: number;
}
export interface BodyPartsDamageHistory {
    Head: DamageStats[];
    Chest: DamageStats[];
    Stomach: DamageStats[];
    LeftArm: DamageStats[];
    RightArm: DamageStats[];
    LeftLeg: DamageStats[];
    RightLeg: DamageStats[];
    Common: DamageStats[];
}
export interface DamageStats {
    Amount: number;
    Type: string;
    SourceId: string;
    OverDamageFrom: string;
    Blunt: boolean;
    ImpactsCount: number;
}
export interface DeathCause {
    DamageType: string;
    Side: string;
    Role: string;
    WeaponId: string;
}
export interface LastPlayerState {
    Info: LastPlayerStateInfo;
    Customization: Record<string, string>;
    Equipment: any;
}
export interface LastPlayerStateInfo {
    Nickname: string;
    Side: string;
    Level: number;
    MemberCategory: string;
}
export interface ConditionCounters {
    Counters: Counter[];
}
export interface Counter {
    id: string;
    value: number;
    qid: string;
}
export interface BackendCounter {
    id: string;
    qid?: string;
    value: number;
}
export interface InsuredItem {
    tid: string;
    itemId: string;
}
export interface Hideout {
    Production: Record<string, Productive>;
    Areas: HideoutArea[];
}
export interface Productive {
    Products: Product[];
    Progress?: number;
    inProgress?: boolean;
    StartTimestamp?: number;
}
export interface Product {
    _id: string;
    _tpl: string;
    upd?: Upd;
}
export interface ScavCase extends Productive {
}
export interface Production extends Productive {
    RecipeId: string;
    SkipTime: number;
    ProductionTime: number;
}
export interface HideoutArea {
    type: HideoutAreas;
    level: number;
    active: boolean;
    passiveBonusesEnabled: boolean;
    completeTime: number;
    constructing: boolean;
    slots: HideoutSlot[];
    lastRecipe: string;
}
export interface HideoutSlot {
    item: HideoutItem[];
}
export interface HideoutItem {
    _id: string;
    _tpl: string;
    upd?: Upd;
}
export interface Bonus {
    type: string;
    templateId?: string;
    passive?: boolean;
    production?: boolean;
    visible?: boolean;
    value?: number;
    icon?: string;
}
export interface Quest {
    qid: string;
    startTime: number;
    status: string;
    statusTimers?: StatusTimer;
    completedConditions?: string[];
}
export interface StatusTimer {
    AvailableForStart?: number;
}
export interface TraderInfo {
    loyaltyLevel: number;
    salesSum: number;
    standing: number;
    nextResupply: number;
    unlocked: boolean;
}
export interface RagfairInfo {
    rating: number;
    isRatingGrowing: boolean;
    offers: IRagfairOffer[];
}
export interface CarExtractCounts {
}
