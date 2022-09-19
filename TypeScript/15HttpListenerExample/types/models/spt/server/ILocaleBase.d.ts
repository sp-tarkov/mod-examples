export interface ILocaleBase {
    global: Record<string, ILocaleGlobalBase>;
    menu: Record<string, string>;
    languages: ILanguageBase[];
}
export interface ILocaleGlobalBase {
    interface: Record<string, string>;
    enum: any[];
    mail: Record<string, string>;
    quest: Record<string, ILocaleQuest>;
    preset: Record<string, ILocalePreset>;
    handbook: Record<string, string>;
    season: Record<string, string>;
    customization: Record<string, ILocaleProps>;
    repeatableQuest: Record<string, string>;
    templates: Record<string, ILocaleProps>;
    locations: Record<string, ILocaleProps>;
    banners: Record<string, ILocaleProps>;
    trading: Record<string, ILocaleTradingProps>;
}
export interface ILocaleQuest {
    name: string;
    description: string;
    note: string;
    failMessageText: string;
    startedMessageText: string;
    successMessageText: string;
    conditions: Record<string, string>;
    location: string;
}
export interface ILocalePreset {
    Name: string;
}
export interface ILocaleProps {
    Name: string;
    ShortName: string;
    Description: string;
}
export interface ILocaleTradingProps {
    FullName: string;
    FirstName: string;
    Nickname: string;
    Location: string;
    Description: string;
}
export interface ILanguageBase {
    ShortName: string;
    Name: string;
}
