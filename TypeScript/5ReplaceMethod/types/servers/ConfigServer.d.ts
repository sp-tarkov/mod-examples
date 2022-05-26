import { JsonUtil } from "../utils/JsonUtil";
import { VFS } from "../utils/VFS";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class ConfigServer {
    private logger;
    private vfs;
    private jsonUtil;
    private configs;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil);
    getConfig<T>(configType: ConfigTypes): T;
    initialize(): void;
}
export declare const enum ConfigTypes {
    AIRDROP = "aki-airdrop",
    BOT = "aki-bot",
    CORE = "aki-core",
    HEALTH = "aki-health",
    HIDEOUT = "aki-hideout",
    HTTP = "aki-http",
    IN_RAID = "aki-inraid",
    INSURANCE = "aki-insurance",
    INVENTORY = "aki-inventory",
    LOCATION = "aki-location",
    MATCH = "aki-match",
    QUEST = "aki-quest",
    RAGFAIR = "aki-ragfair",
    REPAIR = "aki-repair",
    TRADER = "aki-trader",
    WEATHER = "aki-weather"
}
