import { Config } from "../models/eft/common/IGlobals";
import { Inventory } from "../models/eft/common/tables/IBotType";
import { ISeasonalEvent, ISeasonalEventConfig } from "../models/spt/config/ISeasonalEventConfig";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { DatabaseServer } from "../servers/DatabaseServer";
import { LocalisationService } from "./LocalisationService";
export declare class SeasonalEventService {
    protected logger: ILogger;
    protected databaseServer: DatabaseServer;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected seasonalEventConfig: ISeasonalEventConfig;
    constructor(logger: ILogger, databaseServer: DatabaseServer, localisationService: LocalisationService, configServer: ConfigServer);
    protected get events(): Record<string, string>;
    get christmasEventItems(): string[];
    /**
     * Get an array of christmas items found in bots inventories as loot
     * @returns array
     */
    getChristmasEventItems(): string[];
    itemIsChristmasRelated(itemId: string): boolean;
    /**
     * is christmas event active
     * @returns true if active
     */
    christmasEventEnabled(): boolean;
    /**
     * Is detection of seasonal events enabled (halloween / christmas)
     * @returns true if seasonal events should be checked for
     */
    isAutomaticEventDetectionEnabled(): boolean;
    /**
     * Get a dictionary of gear changes to apply to bots for a specific event e.g. Christmas/Halloween
     * @param eventName Name of event to get gear changes for
     * @returns bots with equipment changes
     */
    protected getEventBotGear(eventName: string): Record<string, Record<string, Record<string, number>>>;
    /**
     * Get the dates each seasonal event starts and ends
     * @returns Record with event name + start/end date
     */
    getEventDetails(): ISeasonalEvent[];
    /**
     * Check if current date falls inside any of the seasons events pased in, if so, handle them
     */
    checkForAndEnableSeasonalEvents(): void;
    /**
     * Iterate through bots inventory and loot to find and remove christmas items (as defined in SeasonalEventService)
     * @param nodeInventory Bots inventory to iterate over
     */
    removeChristmasItemsFromBotInventory(nodeInventory: Inventory): void;
    /**
     * Make adjusted to server code based on the name of the event passed in
     * @param globalConfig globals.json
     * @param eventName Name of the event to enable. e.g. Christmas
     */
    protected updateGlobalEvents(globalConfig: Config, eventName: string): void;
    /**
     * Read in data from seasonalEvents.json and add found equipment items to bots
     * @param eventName Name of the event to read equipment in from config
     */
    protected addEventGearToScavs(eventName: string): void;
    protected addPumpkinsToScavBackpacks(): void;
    /**
     * Set Khorovod(dancing tree) chance to 100% on all maps that support it
     */
    protected enableDancingTree(): void;
}
