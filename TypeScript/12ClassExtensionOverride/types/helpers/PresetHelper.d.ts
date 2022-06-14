import { Preset } from "../models/eft/common/IGlobals";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class PresetHelper {
    protected databaseServer: DatabaseServer;
    protected lookup: Record<string, string[]>;
    constructor(databaseServer: DatabaseServer);
    hydratePresetStore(input: Record<string, string[]>): void;
    isPreset(id: string): boolean;
    hasPreset(templateId: string): boolean;
    getPreset(id: string): Preset;
    getPresets(templateId: string): Preset[];
    getDefaultPreset(templateId: string): Preset;
    getBaseItemTpl(presetId: string): string;
}
