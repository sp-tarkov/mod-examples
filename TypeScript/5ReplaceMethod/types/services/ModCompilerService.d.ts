import { ILogger } from "../models/spt/utils/ILogger";
import { VFS } from "../utils/VFS";
export declare class ModCompilerService 
{
    private logger;
    private vfs;
    constructor(logger: ILogger, vfs: VFS);
    compileMod(path: string, modTypeScriptFiles: string[]): Promise<void>;
    private compile;
    private areFilesReady;
    private delay;
}
