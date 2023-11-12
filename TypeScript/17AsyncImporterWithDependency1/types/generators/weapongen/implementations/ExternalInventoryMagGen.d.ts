import { IInventoryMagGen } from "@spt-aki/generators/weapongen/IInventoryMagGen";
import { InventoryMagGen } from "@spt-aki/generators/weapongen/InventoryMagGen";
import { BotWeaponGeneratorHelper } from "@spt-aki/helpers/BotWeaponGeneratorHelper";
import { ItemHelper } from "@spt-aki/helpers/ItemHelper";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { LocalisationService } from "@spt-aki/services/LocalisationService";
export declare class ExternalInventoryMagGen implements IInventoryMagGen {
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected localisationService: LocalisationService;
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    constructor(logger: ILogger, itemHelper: ItemHelper, localisationService: LocalisationService, botWeaponGeneratorHelper: BotWeaponGeneratorHelper);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
