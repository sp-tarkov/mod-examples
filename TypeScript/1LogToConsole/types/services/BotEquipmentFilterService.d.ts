import { IBotType } from "../models/eft/common/tables/IBotType";
import { Equipment, EquipmentBlacklistDetails, IBotConfig } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
export declare class BotEquipmentFilterService {
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected botEquipmentBlacklists: Record<string, Equipment>;
    constructor(logger: ILogger, configServer: ConfigServer);
    /**
     * Filter a bots data to exclude equipment and cartridges defines in the botConfig
     * @param baseBotNode bots json data to filter
     * @param playerLevel Level of the currently playing player
     * @param isPmc Is the bot we're filtering a PMC
     * @param role Role of the bot we're filtering
     */
    filterBotEquipment(baseBotNode: IBotType, playerLevel: number, isPmc: boolean, role: string): void;
    /**
     * Get an object that contains equipment and cartridge blacklists for a specified bot type
     * @param isPmc Is the bot we want the blacklist for a PMC
     * @param role Role of the bot we want the blacklist for
     * @param playerLevel Level of the player
     * @returns EquipmentBlacklistDetails object
     */
    protected getBotEquipmentBlacklist(isPmc: boolean, role: string, playerLevel: number): EquipmentBlacklistDetails;
    /**
     * Filter bot equipment based on blacklist from config/bot.json
     * @param baseBotNode bot .json file to update
     * @param equipmentBlacklist equipment blacklist
     * @returns Filtered bot file
     */
    protected filterEquipment(baseBotNode: IBotType, equipmentBlacklist: EquipmentBlacklistDetails): void;
    /**
     * Filter bot cartridges based on blacklist from config/bot.json
     * @param baseBotNode bot .json file to update
     * @param equipmentBlacklist equipment blacklist
     * @returns Filtered bot file
     */
    protected filterCartridges(baseBotNode: IBotType, equipmentBlacklist: EquipmentBlacklistDetails): void;
}
