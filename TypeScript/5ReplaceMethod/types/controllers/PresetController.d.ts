import { PresetHelper } from "../helpers/PresetHelper";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class PresetController {
    private presetHelper;
    private databaseServer;
    constructor(presetHelper: PresetHelper, databaseServer: DatabaseServer);
    initialize(): void;
}
