import { IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
/** Storing/retreving pmcRoles set at the start of a raid - its done at that point as we know what location the player is heading to */
export declare class PmcAiService {
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected usecRole: string;
    protected bearRole: string;
    constructor(logger: ILogger, configServer: ConfigServer);
    /**
     * Convert from pmc side (usec/bear) to the side as defined in the bot config (usecType/bearType)
     * @param pmcSide eft side (usec/bear)
     * @returns pmc side as defined in config
     */
    getPmcRole(pmcSide: "usec" | "bear" | string): string;
    /**
     * Set the roles for pmcs
     * @param location map location to look up and use as pmc types
     */
    setPmcRolesByLocation(location: string): void;
    /**
     * Clear the saved role from usec/bear PMCs
     */
    clearPmcRoles(): void;
}
