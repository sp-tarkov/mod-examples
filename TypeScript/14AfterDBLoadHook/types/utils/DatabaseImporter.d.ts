import { OnLoad } from "../di/OnLoad";
import { IDatabaseTables } from "../models/spt/server/IDatabaseTables";
import { ILogger } from "../models/spt/utils/ILogger";
import { ImageRouter } from "../routers/ImageRouter";
import { DatabaseServer } from "../servers/DatabaseServer";
import { JsonUtil } from "./JsonUtil";
import { VFS } from "./VFS";
export declare class DatabaseImporter extends OnLoad {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected databaseServer: DatabaseServer;
    protected imageRouter: ImageRouter;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, databaseServer: DatabaseServer, imageRouter: ImageRouter);
    onLoad(): void;
    /**
     * Read all json files in database folder and map into a json object
     * @param filepath path to database folder
     */
    protected hydrateDatabase(filepath: string): void;
    getRoute(): string;
    loadRecursive(filepath: string): IDatabaseTables;
    loadImages(filepath: string): void;
}
