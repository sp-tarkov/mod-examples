import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
export declare class WatermarkLocale {
    private locales;
    getLocale(): string;
    getDescription(): string[];
    getWarning(): string[];
    getModding(): string[];
}
export declare class Watermark {
    private logger;
    private configServer;
    private watermarkLocale?;
    private akiConfig;
    constructor(logger: ILogger, configServer: ConfigServer, watermarkLocale?: WatermarkLocale);
    private text;
    private versionLabel;
    initialize(): void;
    getVersionTag(): string;
    getVersionLabel(): string;
    /** Set window title */
    setTitle(): void;
    /** Reset console cursor to top */
    resetCursor(): void;
    /** Draw the watermark */
    draw(): void;
    /** Caculate text length */
    private textLength;
}
