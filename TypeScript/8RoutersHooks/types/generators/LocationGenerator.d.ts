import { RandomUtil } from "../utils/RandomUtil";
import { IStaticContainerProps, IStaticLootDetails, IStaticAmmoDetails, IStaticForcedProps } from "../models/eft/common/tables/ILootBase";
import { ILooseLoot, SpawnpointTemplate } from "../models/eft/common/ILooseLoot";
import { Item } from "../models/eft/common/tables/IItem";
import { ItemHelper } from "../helpers/ItemHelper";
import { GameEventHelper } from "../helpers/GameEventHelper";
import { ContainerHelper } from "../helpers/ContainerHelper";
import { PresetHelper } from "../helpers/PresetHelper";
import { ConfigServer } from "../servers/ConfigServer";
import { JsonUtil } from "../utils/JsonUtil";
import { MathUtil } from "../utils/MathUtil";
import { ObjectId } from "../utils/ObjectId";
import { RagfairServerHelper } from "../helpers/RagfairServerHelper";
import { ILogger } from "../models/spt/utils/ILogger";
export interface IContainerItem {
    items: Item[];
    width: number;
    height: number;
}
export declare class LocationGenerator {
    private logger;
    private jsonUtil;
    private objectId;
    private randomUtil;
    private ragfairServerHelper;
    private itemHelper;
    private mathUtil;
    private gameEventHelper;
    private containerHelper;
    private presetHelper;
    private configServer;
    private locationConfig;
    constructor(logger: ILogger, jsonUtil: JsonUtil, objectId: ObjectId, randomUtil: RandomUtil, ragfairServerHelper: RagfairServerHelper, itemHelper: ItemHelper, mathUtil: MathUtil, gameEventHelper: GameEventHelper, containerHelper: ContainerHelper, presetHelper: PresetHelper, configServer: ConfigServer);
    generateContainerLoot(containerIn: IStaticContainerProps, staticForced: IStaticForcedProps[], staticLootDist: Record<string, IStaticLootDetails>, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): IStaticContainerProps;
    private getLooseLootMultiplerForLocation;
    private getStaticLootMultiplerForLocation;
    generateDynamicLoot(dynamicLootDist: ILooseLoot, staticAmmoDist: Record<string, IStaticAmmoDetails[]>, locationName: string): SpawnpointTemplate[];
    private createItem;
    private getRandomCompatibleCaliberTemplateId;
    private getRandomValidCaliber;
    private drawAmmoTpl;
    private createRandomMagCartridges;
    private createCartidges;
}
