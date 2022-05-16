import { DatabaseServer } from "../servers/DatabaseServer";
import { ItemHelper } from "../helpers/ItemHelper";
import { Inventory as PmcInventory } from "../@types/eft/common/IPmcData";
import { MinMax, ModsChances, Mods } from "../@types/eft/common/tables/IBotType";
import { WeightedRandomHelper } from "../helpers/WeightedRandomHelper";
import { BotGeneratorHelper } from "../helpers/BotGeneratorHelper";
import { HashUtil } from "../utils/HashUtil";
import { ILogger } from "../@types/spt/utils/ILogger";
export declare class BotWeaponGenerator {
    private logger;
    private hashUtil;
    private databaseServer;
    private itemHelper;
    private weightedRandomHelper;
    private botGeneratorHelper;
    constructor(logger: ILogger, hashUtil: HashUtil, databaseServer: DatabaseServer, itemHelper: ItemHelper, weightedRandomHelper: WeightedRandomHelper, botGeneratorHelper: BotGeneratorHelper);
    generateWeapon(equipmentSlot: string, weaponPool: Record<string, number>, modPool: Mods, modChances: ModsChances, magCounts: MinMax, botRole: string, isPmc: boolean, inventory: PmcInventory): void;
    /** Checks if all required slots are occupied on a weapon and all it's mods */
    private isWeaponValid;
    /**
    * Generates extra magazines or bullets (if magazine is internal) and adds them to TacticalVest and Pockets.
    * Additionally, adds extra bullets to SecuredContainer
    *
    * @param {*} weaponMods
    * @param {*} weaponTemplate
    * @param {*} magCounts
    * @param {*} ammoTpl
    * @returns
    */
    private generateExtraMagazines;
    private addBullets;
    /**
     * Finds and returns tpl of ammo that should be used, while making sure it's compatible
     *
     * @param {*} weaponMods
     * @param {*} weaponTemplate
     * @returns
     */
    private getCompatibleAmmo;
    /** Fill existing magazines to full, while replacing their contents with specified ammo */
    private fillExistingMagazines;
}
