import { OnLoad } from "../di/OnLoad";
import { IDatabaseTables } from "../models/spt/server/IDatabaseTables";
import { ILogger } from "../models/spt/utils/ILogger";
import { ImageRouter } from "../routers/ImageRouter";
import { DatabaseServer } from "../servers/DatabaseServer";
import { CustomHandbookItemService } from "../services/CustomHandbookItemService";
import { CustomItemService } from "../services/CustomItemService";
import { CustomPresetService } from "../services/customPresetService";
import { CustomTraderAssortService } from "../services/CustomTraderAssortService";
import { JsonUtil } from "./JsonUtil";
import { VFS } from "./VFS";
export declare class DatabaseImporter extends OnLoad {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected customItemService: CustomItemService;
    protected customTraderAssortService: CustomTraderAssortService;
    protected customHandbookItemService: CustomHandbookItemService;
    protected customPresetService: CustomPresetService;
    protected imageRouter: ImageRouter;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, databaseServer: DatabaseServer, customItemService: CustomItemService, customTraderAssortService: CustomTraderAssortService, customHandbookItemService: CustomHandbookItemService, customPresetService: CustomPresetService, imageRouter: ImageRouter);
    onLoad(): void;
    /**
     * Read all json files in database folder and map into a json object
     * @param filepath path to database folder
     */
    protected hydrateDatabase(filepath: string): void;
    /**
     * Get all items added through CustomItemService and add to database.templates.items
     * @param dataToImport db data to amend
     */
    protected addCustomItemsToDb(dataToImport: IDatabaseTables): void;
    /**
     * Get all assorts added through CustomTraderAssortService and add to database.traders[x].assort
     * @param dataToImport db data to amend
     */
    protected addCustomTraderAssortsToDb(dataToImport: IDatabaseTables): void;
    /**
     * Get all custom handbook items added through CustomHandbookItemService and add to database.templates.handbook.items
     * @param dataToImport db data to amend
     */
    protected addCustomHandbookItemsToDb(dataToImport: IDatabaseTables): void;
    /**
     * Get all custom preset items added through CustomPresetService and add to database.globals.ItemPresets
     * @param dataToImport
     */
    protected addCustomPresetsToDb(dataToImport: IDatabaseTables): void;
    getRoute(): string;
    loadRecursive(filepath: string): IDatabaseTables;
    loadImages(filepath: string): void;
}
