import { IBotType } from "../models/eft/common/tables/IBotType";
import { EquipmentFilters, EquipmentFilterDetails, IBotConfig, WeightingAdjustmentDetails } from "../models/spt/config/IBotConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
export declare class BotEquipmentFilterService {
    protected logger: ILogger;
    protected configServer: ConfigServer;
    protected botConfig: IBotConfig;
    protected botEquipmentConfig: Record<string, EquipmentFilters>;
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
     * @param botRole Role of the bot we want the blacklist for
     * @param playerLevel Level of the player
     * @returns EquipmentBlacklistDetails object
     */
    getBotEquipmentBlacklist(botRole: string, playerLevel: number): EquipmentFilterDetails;
    /**
     * Get the whitelist for a specific bot type that's within the players level
     * @param botRole Bot type
     * @param playerLevel Players level
     * @returns EquipmentFilterDetails object
     */
    protected getBotEquipmentWhitelist(botRole: string, playerLevel: number): EquipmentFilterDetails;
    /**
     * Retreive clothing weighting adjustments from bot.json config
     * @param botRole Bot type to get adjustments for
     * @param playerLevel level of player
     * @returns Weighting adjustments for bots clothing
     */
    protected getBotClothingAdjustments(botRole: string, playerLevel: number): WeightingAdjustmentDetails;
    /**
     * Retreive item weighting adjustments from bot.json config
     * @param botRole Bot type to get adjustments for
     * @param playerLevel level of player
     * @returns Weighting adjustments for bot items
     */
    protected getBotWeightingAdjustments(botRole: string, playerLevel: number): WeightingAdjustmentDetails;
    /**
     * Filter bot equipment based on blacklist and whitelist from config/bot.json
     * Prioritises whitelist first, if one is found blacklist is ignored
     * @param baseBotNode bot .json file to update
     * @param blacklist equipment blacklist
     * @returns Filtered bot file
     */
    protected filterEquipment(baseBotNode: IBotType, blacklist: EquipmentFilterDetails, whitelist: EquipmentFilterDetails): void;
    /**
     * Filter bot cartridges based on blacklist and whitelist from config/bot.json
     * Prioritises whitelist first, if one is found blacklist is ignored
     * @param baseBotNode bot .json file to update
     * @param blacklist equipment on this list should be excluded from the bot
     * @param whitelist equipment on this list should be used exclusivly
     * @returns Filtered bot file
     */
    protected filterCartridges(baseBotNode: IBotType, blacklist: EquipmentFilterDetails, whitelist: EquipmentFilterDetails): void;
    /**
     * Add/Edit weighting changes to bot items using values from config/bot.json/equipment
     * @param weightingAdjustments Weighting change to apply to bot
     * @param botItemPool Bot item dictionary to adjust
     */
    protected adjustWeighting(weightingAdjustments: WeightingAdjustmentDetails, botItemPool: Record<string, any>): void;
}
