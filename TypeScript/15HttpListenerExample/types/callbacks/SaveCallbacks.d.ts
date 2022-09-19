import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
import { SaveServer } from "../servers/SaveServer";
export declare class SaveCallbacks extends OnLoadOnUpdate {
    protected saveServer: SaveServer;
    constructor(saveServer: SaveServer);
    onLoad(): void;
    getRoute(): string;
    onUpdate(secondsSinceLastRun: number): boolean;
}
