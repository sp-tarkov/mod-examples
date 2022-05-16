/// <reference types="node" />
import { Daum } from "../@types/eft/itemEvent/IItemEventRouterRequest";
import { ILogger } from "../@types/spt/utils/ILogger";
import { IAsyncQueue } from "../@types/spt/utils/IAsyncQueue";
import { IUUidGenerator } from "../@types/spt/utils/IUuidGenerator";
import fs from "fs";
export declare class WinstonLogger implements ILogger {
    private asyncQueue;
    private uuidGenerator;
    private showDebugInConsole;
    private filepath;
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
