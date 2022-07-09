import { Preset } from "../models/eft/common/IGlobals";
import { CustomPreset } from "../models/spt/services/CustomPreset";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class CustomPresetService {
    protected logger: ILogger;
    private customPresets;
    constructor(logger: ILogger);
    /**
     * Add custom preset to internal array
     * @param presetKey presets key
     * @param presetToAdd preset item to add
     */
    add(presetKey: string, presetToAdd: Preset): void;
    /**
     * Get all custom presets
     * @returns
     */
    get(): CustomPreset[];
}
