import { ContainerHelper } from "../helpers/ContainerHelper";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { ItemHelper } from "../helpers/ItemHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { ILooseLoot, SpawnpointTemplate } from "../models/eft/common/ILooseLoot";
import { Item } from "../models/eft/common/tables/IItem";
import { IStaticAmmoDetails, IStaticContainerProps, IStaticForcedProps, IStaticLootDetails } from "../models/eft/common/tables/ILootBase";
import { ITemplateItem } from "../models/eft/common/tables/ITemplateItem";
import { ILocationConfig } from "../models/spt/config/ILocationConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { JsonUtil } from "../utils/JsonUtil";
import { MathUtil } from "../utils/MathUtil";
import { ObjectId } from "../utils/ObjectId";
import { RandomUtil } from "../utils/RandomUtil";
export interface IContainerItem {
    items: Item[];
    width: number;
    height: number;
}
export declare class LocationGenerator {
    protected logger: ILogger;
    protected jsonUtil: JsonUtil;
    protected objectId: ObjectId;
    protected randomUtil: RandomUtil;
    protected ragfairServerHelper: RagfairServerHelper;
    protected itemHelper: ItemHelper;
    protected mathUtil: MathUtil;
    protected gameEventHelper: GameEventHelper;
    protected containerHelper: ContainerHelper;
    protected presetHelper: PresetHelper;
    protected configServer: ConfigServer;
    protected locationConfig: ILocationConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, objectId: ObjectId, randomUtil: RandomUtil, ragfairServerHelper: RagfairServerHelper, itemHelper: ItemHelper, mathUtil: MathUtil, gameEventHelper: GameEventHelper, containerHelper: ContainerHelper, presetHelper: PresetHelper, configServer: ConfigServer);
    generateContainerLoot(containerIn: IStaticContainerProps, staticForced: IStaticForcedProps[], staticLootDist: Record<string, IStaticLootDetails>, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): IStaticContainerProps;
    protected getLooseLootMultiplerForLocation(location: string): number;
    protected getStaticLootMultiplerForLocation(location: string): number;
    generateDynamicLoot(dynamicLootDist: ILooseLoot, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): SpawnpointTemplate[];
    protected createItem(tpl: string, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, parentId?: string): IContainerItem;
    protected getRandomCompatibleCaliberTemplateId(item: ITemplateItem): string;
    protected getRandomValidCaliber(magTemplate: ITemplateItem): string;
    protected drawAmmoTpl(caliber: string, staticAmmoDist: Record<string, IStaticAmmoDetails[]>): string;
    protected createRandomMagCartridges(magTemplate: ITemplateItem, parentId: string, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, caliber?: string): Item;
    protected createCartidges(parentId: string, ammoTpl: string, stackCount: number): Item;
}
