import * as ts from "typescript";
import { ILogger } from "../models/spt/utils/ILogger";
import { VFS } from "../utils/VFS";
import { HashCacheService } from "./HashCacheService";
export declare class ModCompilerService {
    protected logger: ILogger;
    protected hashCacheService: HashCacheService;
    protected vfs: VFS;
    constructor(logger: ILogger, hashCacheService: HashCacheService, vfs: VFS);
    compileMod(modName: string, modPath: string, modTypeScriptFiles: string[]): Promise<void>;
    protected compile(fileNames: string[], options: ts.CompilerOptions): Promise<void>;
    protected buildDepth(depth: number): string;
    protected getNodesModulesPath(depth: number): string;
    protected getAkiPath(depth: number): string;
    protected getAkiFolder(): string;
    protected getNodesModulesFolder(): string;
    protected calculateDepth(file: string): number;
    protected areFilesReady(fileNames: string[]): boolean;
    protected delay(ms: number): Promise<unknown>;
}
