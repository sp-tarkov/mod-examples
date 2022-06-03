import { DependencyContainer } from "tsyringe";
import { IModLoader } from "../models/spt/mod/IModLoader";
import { ILogger } from "../models/spt/utils/ILogger";
import { ConfigServer } from "../servers/ConfigServer";
import { ModCompilerService } from "../services/ModCompilerService";
import { JsonUtil } from "../utils/JsonUtil";
import { VFS } from "../utils/VFS";
import { BundleLoader } from "./BundleLoader";
export declare class InitialModLoader implements IModLoader {
    private logger;
    private vfs;
    private jsonUtil;
    private modCompilerService;
    private bundleLoader;
    private configServer;
    private static container;
    private readonly basepath;
    private imported;
    private onLoad;
    private akiConfig;
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, modCompilerService: ModCompilerService, bundleLoader: BundleLoader, configServer: ConfigServer);
    load(container: DependencyContainer): Promise<void>;
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getImportedModsNames(): string[];
    getModPath(mod: string): string;
    private importClass;
    private importMods;
    /**
     *
     * @param mods Get an array of broken/invalid mods by name
     * @returns Mod names array
     */
    private getBrokenMods;
    /**
     * Get packageJson data for mods
     * @param mods mods to get packageJson for
     * @returns dictionary <modName - package.json>
     */
    private getModsPackageData;
    /**
     * Does mod have "delayedLoad(" string in its entry class
     * @param modFolderName folder name
     * @param modToValidate package.json details
     * @returns boolean
     */
    private isModSpt300Compatible;
    private isModCombatibleWithAki;
    private executeMods;
    private sortModsLoadOrder;
    private addMod;
    private areModDependenciesFulfilled;
    private isModCompatible;
    private validMod;
    private getLoadOrderRecursive;
    private getLoadOrder;
    getContainer(): DependencyContainer;
}
