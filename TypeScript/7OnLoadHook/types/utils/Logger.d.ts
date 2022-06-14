/// <reference types="node" />
import { Daum } from "../models/eft/itemEvent/IItemEventRouterRequest";
import { ILogger } from "../models/spt/utils/ILogger";
import winston from "winston";
import { IAsyncQueue } from "../models/spt/utils/IAsyncQueue";
import { IUUidGenerator } from "../models/spt/utils/IUuidGenerator";
import fs from "fs";
interface SptLogger {
    error: (msg: string | Record<string, unknown>) => void;
    warn: (msg: string | Record<string, unknown>) => void;
    succ?: (msg: string | Record<string, unknown>) => void;
    info: (msg: string | Record<string, unknown>) => void;
    debug: (msg: string | Record<string, unknown>) => void;
}
export declare class WinstonLogger implements ILogger {
    protected asyncQueue: IAsyncQueue;
    protected uuidGenerator: IUUidGenerator;
    protected showDebugInConsole: boolean;
    protected folderPath: string;
    protected file: string;
    protected filePath: string;
    protected logLevels: {
        levels: {
            error: number;
            warn: number;
            succ: number;
            info: number;
            custom: number;
            debug: number;
        };
        colors: {
            error: string;
            warn: string;
            succ: string;
            info: string;
            custom: string;
            debug: string;
        };
    };
    protected logger: winston.Logger & SptLogger;
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
export {};
