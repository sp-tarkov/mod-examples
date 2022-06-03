import { MessageType } from "../../enums/MessageType";
import { IPmcData } from "../common/IPmcData";
import { Item } from "../common/tables/IItem";
export interface IAkiProfile {
    info: Info;
    characters: Characters;
    suits: string[];
    weaponbuilds: WeaponBuild[];
    dialogues: Record<string, Dialogue>;
    aki: Aki;
    vitality: Vitality;
    inraid: Inraid;
    insurance: Insurance[];
}
export interface Info {
    id: string;
    username: string;
    password: string;
    wipe: boolean;
    edition: string;
}
export interface Characters {
    pmc: IPmcData;
    scav: IPmcData;
}
export interface WeaponBuild {
    id: string;
    name: string;
    root: string;
    items: Item[];
}
export interface Dialogue {
    _id: string;
    messages: Message[];
    pinned: boolean;
    new: number;
    attachmentsNew: number;
}
export interface DialogueInfo {
    _id: string;
    type: MessageType;
    message: MessagePreview;
    pinned: boolean;
    new: number;
    attachmentsNew: number;
}
export interface Message {
    _id: string;
    uid: string;
    type: MessageType;
    dt: number;
    localDateTime: number;
    UtcDateTime?: number;
    Member?: IUpdatableChatMember;
    templateId: string;
    text?: string;
    hasRewards: boolean;
    rewardCollected: boolean;
    items: Items;
    maxStorageTime?: number;
    systemData?: ISystemData;
}
export interface MessagePreview {
    uid: string;
    type: MessageType;
    dt: number;
    templateId: string;
    text?: string;
}
export interface Items {
    stash?: string;
    data?: Item[];
}
export interface ISystemData {
    date?: string;
    time?: string;
    location?: string;
    buyerNickname?: string;
    soldItem?: string;
    itemCount?: number;
}
export interface IUpdatableChatMember {
    Nickname: string;
    Side: string;
    Level: number;
    MemberCategory: string;
    Ignored: boolean;
    Banned: boolean;
}
export interface DateTime {
    date: string;
    time: string;
}
export interface Aki {
    version: string;
}
export interface Vitality {
    health: Health;
    effects: Effects;
}
export interface Health {
    Hydration: number;
    Energy: number;
    Temperature: number;
    Head: number;
    Chest: number;
    Stomach: number;
    LeftArm: number;
    RightArm: number;
    LeftLeg: number;
    RightLeg: number;
}
export interface Effects {
    Head: Head;
    Chest: Chest;
    Stomach: Stomach;
    LeftArm: LeftArm;
    RightArm: RightArm;
    LeftLeg: LeftLeg;
    RightLeg: RightLeg;
}
export interface Head {
}
export interface Chest {
}
export interface Stomach {
}
export interface LeftArm {
}
export interface RightArm {
}
export interface LeftLeg {
}
export interface RightLeg {
}
export interface Inraid {
    location: string;
    character: string;
}
export interface Insurance {
    scheduledTime: number;
    traderId: string;
    messageContent: MessageContent;
    items: Item[];
}
export interface MessageContent {
    ragfair?: MessageContentRagfair;
    text?: string;
    templateId: string;
    type: MessageType;
    maxStorageTime?: number;
    systemData?: MessageContentData;
}
export interface MessageContentRagfair {
    offerId: string;
    count: number;
    handbookId: string;
}
export interface MessageContentData {
    date: string;
    time: string;
    location: string;
}
