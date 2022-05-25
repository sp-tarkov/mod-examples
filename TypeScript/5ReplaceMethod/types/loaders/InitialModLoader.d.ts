import { DependencyContainer } from "tsyringe";
import { JsonUtil } from "../utils/JsonUtil";
import { VFS } from "../utils/VFS";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { ModCompilerService } from "../services/ModCompilerService";
import { HashCacheService } from "../services/HashCacheService";
import { IModLoader } from "../models/spt/mod/IModLoader";
export declare class InitialModLoader implements IModLoader 
{
    private logger;
    private vfs;
    private jsonUtil;
    private modCompilerService;
    private hashCacheService;
    private configServer;
    private readonly basepath;
    private imported;
    private onLoad;
    private akiConfig;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, modCompilerService: ModCompilerService, hashCacheService: HashCacheService, configServer: ConfigServer);
    load(container: DependencyContainer): Promise<void>;
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getImportedModsNames(): string[];
    getModPath(mod: string): string;
    private importClass;
    private importMods;
    private isModCombatibleWithAki;
    private executeMods;
    private sortModsLoadOrder;
    private addMod;
    private compileModIfNeeded;
    private areModDependenciesFulfilled;
    private isModCompatible;
    private validMod;
    private getLoadOrderRecursive;
    private getLoadOrder;
}
