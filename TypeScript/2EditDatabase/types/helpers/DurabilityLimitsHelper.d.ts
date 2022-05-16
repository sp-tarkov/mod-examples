import { ConfigServer } from "../servers/ConfigServer";
import { IBotConfig } from "../@types/spt/config/IBotConfig";
import { ITemplateItem } from "../@types/eft/common/tables/ITemplateItem";
import { RandomUtil } from "../utils/RandomUtil";
import { BotHelper } from "./BotHelper";
export declare class DurabilityLimitsHelper {
    private randomUtil;
    private botHelper;
    private configServer;
    botConfig: IBotConfig;
    constructor(randomUtil: RandomUtil, botHelper: BotHelper, configServer: ConfigServer);
    getRandomisedMaxWeaponDurability(itemTemplate: ITemplateItem, botRole: string): number;
    getRandomisedMaxArmorDurability(itemTemplate: ITemplateItem, botRole: string): number;
    getRandomisedWeaponDurability(itemTemplate: ITemplateItem, botRole: string, maxDurability: number): number;
    getRandomisedArmorDurability(itemTemplate: ITemplateItem, botRole: string, maxDurability: number): number;
    private generateMaxWeaponDurability;
    private generateMaxPmcArmorDurability;
    private getLowestMaxWeaponFromConfig;
    private getHighestMaxWeaponDurabilityFromConfig;
    private generateWeaponDurability;
    private generateArmorDurability;
    private getMinWeaponDeltaFromConfig;
    private getMaxWeaponDeltaFromConfig;
    private getMinArmorDeltaFromConfig;
    private getMaxArmorDeltaFromConfig;
}
