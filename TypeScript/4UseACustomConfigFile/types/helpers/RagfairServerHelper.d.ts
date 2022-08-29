import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { MemberCategory } from "../models/enums/MemberCategory";
import { IQuestConfig } from "../models/spt/config/IQuestConfig";
import { IRagfairConfig } from "../models/spt/config/IRagfairConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { ItemFilterService } from "../services/ItemFilterService";
import { LocaleService } from "../services/LocaleService";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { DialogueHelper } from "./DialogueHelper";
import { ItemHelper } from "./ItemHelper";
import { ProfileHelper } from "./ProfileHelper";
/**
 * Helper class for common ragfair server actions
 */
export declare class RagfairServerHelper {
    protected randomUtil: RandomUtil;
    protected hashUtil: HashUtil;
    protected saveServer: SaveServer;
    protected databaseServer: DatabaseServer;
    protected profileHelper: ProfileHelper;
    protected itemHelper: ItemHelper;
    protected localeService: LocaleService;
    protected dialogueHelper: DialogueHelper;
    protected jsonUtil: JsonUtil;
    protected itemFilterService: ItemFilterService;
    protected configServer: ConfigServer;
    protected ragfairConfig: IRagfairConfig;
    protected questConfig: IQuestConfig;
    protected static goodsReturnedTemplate: string;
    constructor(randomUtil: RandomUtil, hashUtil: HashUtil, saveServer: SaveServer, databaseServer: DatabaseServer, profileHelper: ProfileHelper, itemHelper: ItemHelper, localeService: LocaleService, dialogueHelper: DialogueHelper, jsonUtil: JsonUtil, itemFilterService: ItemFilterService, configServer: ConfigServer);
    /**
     * Is item valid / on blacklist / quest item
     * @param itemDetails
     * @returns boolean
     */
    isItemValidRagfairItem(itemDetails: [boolean, ITemplateItem]): boolean;
    protected isItemBlacklisted(itemTemplateId: string): boolean;
    isTrader(userID: string): boolean;
    isPlayer(userID: string): boolean;
    returnItems(sessionID: string, items: any[]): void;
    calculateDynamicStackCount(tplId: string, isWeaponPreset: boolean): number;
    getDynamicOfferCurrency(): string;
    getMemberType(userID: string): MemberCategory;
    getNickname(userID: string): string;
    getPresetItems(item: any): Item[];
    getPresetItemsByTpl(item: Item): Item[];
    reparentPresets(item: Item, preset: Item[]): Item[];
}
