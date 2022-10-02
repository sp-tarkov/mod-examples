import { ISeasonalEvent, ISeasonalEventConfig } from "../models/spt/config/ISeasonalEventConfig";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
export declare class GameEventHelper {
    protected databaseServer: DatabaseServer;
    protected configServer: ConfigServer;
    protected seasonalEventConfig: ISeasonalEventConfig;
    constructor(databaseServer: DatabaseServer, configServer: ConfigServer);
    get events(): Record<string, string>;
    get christmasEventItems(): string[];
    itemIsChristmasRelated(itemId: string): boolean;
    christmasEventEnabled(): boolean;
    /**
     * Get the dates each seasonal event starts and ends
     * @returns Record with event name + start/end date
     */
    getEventDetails(): ISeasonalEvent[];
}
