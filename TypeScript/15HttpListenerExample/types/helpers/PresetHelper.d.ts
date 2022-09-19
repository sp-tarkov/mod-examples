import { Preset } from "../models/eft/common/IGlobals";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "../utils/JsonUtil";
export declare class PresetHelper {
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected lookup: Record<string, string[]>;
    constructor(jsonUtil: JsonUtil, databaseServer: DatabaseServer);
    hydratePresetStore(input: Record<string, string[]>): void;
    isPreset(id: string): boolean;
    hasPreset(templateId: string): boolean;
    getPreset(id: string): Preset;
    getPresets(templateId: string): Preset[];
    getDefaultPreset(templateId: string): Preset;
    getBaseItemTpl(presetId: string): string;
}
