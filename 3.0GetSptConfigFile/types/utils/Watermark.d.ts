import { IWatermark, IWatermarkLocale } from "../@types/spt/utils/IWatermark";
import { ConfigServer } from "../servers/ConfigServer";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class WatermarkLocale implements IWatermarkLocale {
    private locales;
    getLocale(): string;
    getDescription(): string[];
    getWarning(): string[];
}
export declare class Watermark implements IWatermark {
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
