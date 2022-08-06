import { HandbookHelper } from "../helpers/HandbookHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { Preset } from "../models/eft/common/IGlobals";
import { Item } from "../models/eft/common/tables/IItem";
import { IBarterScheme } from "../models/eft/common/tables/ITrader";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig";
import { IRagfairServerPrices } from "../models/spt/ragfair/IRagfairServerPrices";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { RandomUtil } from "../utils/RandomUtil";
export declare class RagfairPriceService {
    protected handbookHelper: HandbookHelper;
    protected databaseServer: DatabaseServer;
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected presetHelper: PresetHelper;
    protected randomUtil: RandomUtil;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    protected prices: IRagfairServerPrices;
    constructor(handbookHelper: HandbookHelper, databaseServer: DatabaseServer, logger: ILogger, itemHelper: ItemHelper, presetHelper: PresetHelper, randomUtil: RandomUtil, configServer: ConfigServer);
    generateStaticPrices(): void;
    generateDynamicPrices(): void;
    hasDynamicPrices(): boolean;
    getDynamicPrice(itemTpl: string): number;
    getAllFleaPrices(): Record<string, number>;
    getFleaPriceForItem(tplId: string): number;
    getStaticPriceForItem(tplId: string): number;
    getBarterPrice(barterScheme: IBarterScheme[]): number;
    getDynamicOfferPrice(items: Item[], desiredCurrency: string): number;
    /**
     * Multiply the price by a randomised curve where n = 2, shift = 2
     * @param existingPrice price to alter
     * @param isPreset is the item we're multiplying a preset
     * @returns multiplied price
     */
    protected randomisePrice(existingPrice: number, isPreset: boolean): number;
    /**
     * Calculate the cost of a weapon preset by adding together the price of its mods + base price of default weapon preset
     * @param item base weapon
     * @param items weapon plus mods
     * @param existingPrice price of existing base weapon
     * @returns
     */
    getWeaponPresetPrice(item: Item, items: Item[], existingPrice: number): number;
    /**
     * Attempt to get the default preset for a weapon, failing that get the first preset in the array
     * (assumes default = has encyclopedia entry)
     * @param presets weapon presets to choose from
     * @returns Default preset object
     */
    protected getDefaultWeaponPreset(presets: Preset[], weapon: Item): Preset;
}
