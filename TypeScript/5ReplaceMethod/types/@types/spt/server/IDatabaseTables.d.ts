import { IGlobals } from "../../eft/common/IGlobals";
import { IBotBase } from "../../eft/common/tables/IBotBase";
import { IBotCore } from "../../eft/common/tables/IBotCore";
import { IBotType } from "../../eft/common/tables/IBotType";
import { ICustomizationItem } from "../../eft/common/tables/ICustomizationItem";
import { IHandbookBase } from "../../eft/common/tables/IHandbookBase";
import { ILootBase } from "../../eft/common/tables/ILootBase";
import { IQuest } from "../../eft/common/tables/IQuest";
import { IRepeatableQuestDatabase } from "../../eft/common/tables/IRepeatableQuests";
import { ITemplateItem } from "../../eft/common/tables/ITemplateItem";
import { ITrader } from "../../eft/common/tables/ITrader";
import { IHideoutArea } from "../../eft/hideout/IHideoutArea";
import { IHideoutProduction } from "../../eft/hideout/IHideoutProduction";
import { IHideoutScavCase } from "../../eft/hideout/IHideoutScavCase";
import { IHideoutSettingsBase } from "../../eft/hideout/IHideoutSettingsBase";
import { ILocaleBase } from "./ILocaleBase";
import { ILocations } from "./ILocations";
import { IServerBase } from "./IServerBase";
import { ISettingsBase } from "./ISettingsBase";
export interface IDatabaseTables {
    bots: {
        types: Record<string, IBotType>;
        base: IBotBase;
        core: IBotCore;
    };
    hideout: {
        areas: IHideoutArea[];
        production: IHideoutProduction[];
        scavcase: IHideoutScavCase[];
        settings: IHideoutSettingsBase;
    };
    locales: ILocaleBase;
    locations: ILocations;
    loot: ILootBase;
    match: any;
    templates: {
        character: string[];
        items: Record<string, ITemplateItem>;
        quests: IQuest[];
        repeatableQuests: IRepeatableQuestDatabase;
        clientItems: Record<string, ITemplateItem>;
        handbook: IHandbookBase;
        customization: Record<string, ICustomizationItem>;
        profiles: any;
        prices: Record<string, number>;
    };
    traders: Record<string, ITrader>;
    globals: IGlobals;
    server: IServerBase;
    settings: ISettingsBase;
}
