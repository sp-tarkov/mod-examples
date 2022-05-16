export interface IPmcDataRepeatableQuest {
    name: string;
    activeQuests: Quest[];
    inactiveQuests: Quest[];
    endTime: number;
}
export interface Quest {
    _id: string;
    traderId: string;
    location: string;
    image: string;
    type: string;
    isKey: boolean;
    restartable: boolean;
    instantComplete: boolean;
    secretQuest: boolean;
    canShowNotificationsInGame: boolean;
    rewards: Rewards;
    conditions: Conditions;
    name: string;
    note: string;
    description: string;
    successMessageText: string;
    failMessageText: string;
    startedMessageText: string;
    templateId: string;
}
export interface Rewards {
    Started: Reward[];
    Success: Reward[];
    Fail: Reward[];
}
export interface Reward {
    value: number;
    type: string;
    index: number;
    target?: string;
    items?: Item[];
}
export interface Item {
    _id: string;
    _tpl: string;
    upd: Upd;
}
export interface Conditions {
    AvailableForStart: any[];
    AvailableForFinish: AvailableForFinish[];
    Fail: any[];
}
export interface AvailableForFinish {
    _props: Props;
    _parent: string;
    dynamicLocale: boolean;
}
export interface Props {
    id: string;
    parentId: string;
    dynamicLocale: boolean;
    index: number;
    visibilityConditions: any[];
    target: string[];
    value: number;
    minDurability: number;
    maxDurability: number;
    dogtagLevel: number;
    onlyFoundInRaid: boolean;
}
export interface Upd {
    StackObjectsCount: number;
    SpawnedInSession?: boolean;
}
