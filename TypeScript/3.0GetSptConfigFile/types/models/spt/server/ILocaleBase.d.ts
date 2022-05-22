export interface ILocaleBase {
    global: ILocaleGlobalBase;
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
    templates: ILocaleTemplateBase;
    locations: ILocaleLocationsBase;
    banners: ILocaleBannersBase;
    trading: ILocaleTradingBase;
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
export interface ILocaleTemplateBase {
    templates: Record<string, ILocaleProps>;
}
export interface ILocaleLocationsBase {
    locations: Record<string, ILocaleProps>;
}
export interface ILocaleBannersBase {
    locations: Record<string, ILocaleProps>;
}
export interface ILocaleProps {
    Name: string;
    ShortName: string;
    Description: string;
}
export interface ILocaleTradingBase {
    locations: Record<string, ILocaleTradingProps>;
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
