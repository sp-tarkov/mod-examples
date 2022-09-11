import { BotWeaponGeneratorHelper } from "../../../helpers/BotWeaponGeneratorHelper";
import { ItemHelper } from "../../../helpers/ItemHelper";
import { ILogger } from "../../../models/spt/utils/ILogger";
import { IInventoryMagGen } from "../IInventoryMagGen";
import { InventoryMagGen } from "../InventoryMagGen";
export declare class ExternalInventoryMagGen implements IInventoryMagGen {
    protected logger: ILogger;
    protected itemHelper: ItemHelper;
    protected botWeaponGeneratorHelper: BotWeaponGeneratorHelper;
    constructor(logger: ILogger, itemHelper: ItemHelper, botWeaponGeneratorHelper: BotWeaponGeneratorHelper);
    getPriority(): number;
    canHandleInventoryMagGen(inventoryMagGen: InventoryMagGen): boolean;
    process(inventoryMagGen: InventoryMagGen): void;
}
