import { PresetController } from "../controllers/PresetController";
import { OnLoad } from "../di/OnLoad";
export declare class PresetCallbacks extends OnLoad {
    private presetController;
    constructor(presetController: PresetController);
    onLoad(): void;
    getRoute(): string;
}
