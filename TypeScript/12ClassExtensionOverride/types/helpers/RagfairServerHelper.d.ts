import { MemberCategory } from "../models/enums/MemberCategory";
import { Item } from "../models/eft/common/tables/IItem";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { SaveServer } from "../servers/SaveServer";
import { HashUtil } from "../utils/HashUtil";
import { JsonUtil } from "../utils/JsonUtil";
import { RandomUtil } from "../utils/RandomUtil";
import { DialogueHelper } from "./DialogueHelper";
import { ItemHelper } from "./ItemHelper";
import { ProfileHelper } from "./ProfileHelper";
export declare class RagfairServerHelper {
    private randomUtil;
    private hashUtil;
    private saveServer;
    private databaseServer;
    private profileHelper;
    private itemHelper;
    private dialogueHelper;
    private jsonUtil;
    private configServer;
    private ragfairConfig;
    private questConfig;
    private static TPL_GOODS_RETURNED;
    constructor(randomUtil: RandomUtil, hashUtil: HashUtil, saveServer: SaveServer, databaseServer: DatabaseServer, profileHelper: ProfileHelper, itemHelper: ItemHelper, dialogueHelper: DialogueHelper, jsonUtil: JsonUtil, configServer: ConfigServer);
    /**
     * Is item valid / on blacklist / quest item
     * @param itemDetails
     * @returns boolean
     */
    isItemValidRagfairItem(itemDetails: [boolean, ITemplateItem]): boolean;
    private isItemBlacklisted;
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
