import { ILocaleConfig } from "../models/spt/config/ILocaleConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
export declare class LocaleService {
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected localeConfig: ILocaleConfig;
    constructor(logger: ILogger, configServer: ConfigServer);
    /**
     * Gets the locale key from the locale.json file
     * @returns locale e.g en/ge/cz/cn
     */
    getDesiredLocale(): string;
}
