import { SaveServer } from "../servers/SaveServer";
import { OnLoadOnUpdate } from "../di/OnLoadOnUpdate";
export declare class SaveCallbacks extends OnLoadOnUpdate 
{
    private saveServer;
    constructor(saveServer: SaveServer);
    onLoad(): void;
    getRoute(): string;
    onUpdate(secondsSinceLastRun: number): boolean;
}
