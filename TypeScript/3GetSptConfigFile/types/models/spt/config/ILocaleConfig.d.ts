import { IBaseConfig } from "./IBaseConfig";
export interface ILocaleConfig extends IBaseConfig {
    kind: "aki-locale";
    desiredLocale: string;
}
