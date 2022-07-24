import { ITemplateItem } from "../../eft/common/tables/ITemplateItem";
export declare class BotLootCache {
    backpackLoot: ITemplateItem[];
    pocketLoot: ITemplateItem[];
    vestLoot: ITemplateItem[];
    combinedPoolLoot: ITemplateItem[];
    specialItems: ITemplateItem[];
    healingItems: ITemplateItem[];
    drugItems: ITemplateItem[];
    stimItems: ITemplateItem[];
    grenadeItems: ITemplateItem[];
}
export declare enum LootCacheType {
    Special = "Special",
    Backpack = "Backpack",
    Pocket = "Pocket",
    Vest = "Vest",
    Combined = "Combined",
    HealingItems = "HealingItems",
    DrugItems = "DrugItems",
    StimItems = "StimItems",
    GrenadeItems = "GrenadeItems"
}
