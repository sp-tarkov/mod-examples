import { ILogger } from "../models/spt/utils/ILogger";
import { VFS } from "../utils/VFS";
import { HashCacheService } from "./HashCacheService";
export declare class ModCompilerService {
    private logger;
    private hashCacheService;
    private vfs;
    constructor(logger: ILogger, hashCacheService: HashCacheService, vfs: VFS);
    compileMod(modName: string, modPath: string, modTypeScriptFiles: string[]): Promise<void>;
    private compile;
    private buildDepth;
    private calculateDepth;
    private areFilesReady;
    private delay;
}
