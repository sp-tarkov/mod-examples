import { IPreset } from "@spt-aki/models/eft/common/IGlobals";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { ItemHelper } from "./ItemHelper";
export declare class PresetHelper {
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected itemHelper: ItemHelper;
    protected lookup: Record<string, string[]>;
    protected defaultEquipmentPresets: Record<string, IPreset>;
    protected defaultWeaponPresets: Record<string, IPreset>;
    constructor(jsonUtil: JsonUtil, databaseServer: DatabaseServer, itemHelper: ItemHelper);
    hydratePresetStore(input: Record<string, string[]>): void;
    /**
     * Get default weapon and equipment presets
     * @returns Dictionary
     */
    getDefaultPresets(): Record<string, IPreset>;
    /**
     * Get default weapon presets
     * @returns Dictionary
     */
    getDefaultWeaponPresets(): Record<string, IPreset>;
    /**
     * Get default equipment presets
     * @returns Dictionary
     */
    getDefaultEquipmentPresets(): Record<string, IPreset>;
    isPreset(id: string): boolean;
    hasPreset(templateId: string): boolean;
    getPreset(id: string): IPreset;
    getAllPresets(): IPreset[];
    getPresets(templateId: string): IPreset[];
    /**
     * Get the default preset for passed in item id
     * @param templateId Item id to get preset for
     * @returns Null if no default preset, otherwise IPreset
     */
    getDefaultPreset(templateId: string): IPreset;
    getBaseItemTpl(presetId: string): string;
}
