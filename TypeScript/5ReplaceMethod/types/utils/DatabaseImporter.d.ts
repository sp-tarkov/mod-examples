import { VFS } from "./VFS";
import { JsonUtil } from "./JsonUtil";
import { DatabaseServer } from "../servers/DatabaseServer";
import { ImageRouter } from "../routers/ImageRouter";
import { OnLoad } from "../di/OnLoad";
import { ILogger } from "../models/spt/utils/ILogger";
export declare class DatabaseImporter extends OnLoad {
    private logger;
    private vfs;
    private jsonUtil;
    private databaseServer;
    private imageRouter;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, databaseServer: DatabaseServer, imageRouter: ImageRouter);
    onLoad(): void;
    getRoute(): string;
    loadRecursive(filepath: string): any;
    loadImages(filepath: string): void;
}
