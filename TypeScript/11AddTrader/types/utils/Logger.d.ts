/// <reference types="node" />
import { Daum } from "../models/eft/itemEvent/IItemEventRouterRequest";
import { ILogger } from "../models/spt/utils/ILogger";
import { IAsyncQueue } from "../models/spt/utils/IAsyncQueue";
import { IUUidGenerator } from "../models/spt/utils/IUuidGenerator";
import fs from "fs";
export declare class WinstonLogger implements ILogger {
    private asyncQueue;
    private uuidGenerator;
    private showDebugInConsole;
    private folderPath;
    private file;
    private filePath;
    private logLevels;
    private logger;
    writeFilePromisify: (path: fs.PathLike, data: string, options?: any) => Promise<void>;
    constructor(asyncQueue: IAsyncQueue, uuidGenerator: IUUidGenerator);
    writeToLogFile(data: string | Daum): Promise<void>;
    log(data: string | Error | Record<string, unknown>, color: string): Promise<void>;
    error(data: string | Record<string, unknown>): Promise<void>;
    warning(data: string | Record<string, unknown>): Promise<void>;
    success(data: string | Record<string, unknown>): Promise<void>;
    info(data: string | Record<string, unknown>): Promise<void>;
    debug(data: string | Record<string, unknown>, onlyShowInConsole?: boolean): Promise<void>;
}
