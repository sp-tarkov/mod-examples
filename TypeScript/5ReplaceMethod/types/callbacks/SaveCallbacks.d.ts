import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
import { SaveServer } from "../servers/SaveServer";
export declare class SaveCallbacks extends OnLoadOnUpdate {
    private saveServer;
    constructor(saveServer: SaveServer);
    onLoad(): void;
    getRoute(): string;
    onUpdate(secondsSinceLastRun: number): boolean;
}
