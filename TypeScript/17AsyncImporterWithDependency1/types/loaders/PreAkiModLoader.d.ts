import { DependencyContainer } from "tsyringe";
import { BundleLoader } from "@spt-aki/loaders/BundleLoader";
import { ModLoadOrder } from "@spt-aki/loaders/ModLoadOrder";
import { ModTypeCheck } from "@spt-aki/loaders/ModTypeCheck";
import { ModDetails } from "@spt-aki/models/eft/profile/IAkiProfile";
import { ICoreConfig } from "@spt-aki/models/spt/config/ICoreConfig";
import { IModLoader } from "@spt-aki/models/spt/mod/IModLoader";
import { IPackageJsonData } from "@spt-aki/models/spt/mod/IPackageJsonData";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { LocalisationService } from "@spt-aki/services/LocalisationService";
import { ModCompilerService } from "@spt-aki/services/ModCompilerService";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { VFS } from "@spt-aki/utils/VFS";
export declare class PreAkiModLoader implements IModLoader {
    protected logger: ILogger;
    protected vfs: VFS;
    protected jsonUtil: JsonUtil;
    protected modCompilerService: ModCompilerService;
    protected bundleLoader: BundleLoader;
    protected localisationService: LocalisationService;
    protected configServer: ConfigServer;
    protected modLoadOrder: ModLoadOrder;
    protected modTypeCheck: ModTypeCheck;
    protected static container: DependencyContainer;
    protected readonly basepath = "user/mods/";
    protected readonly modOrderPath = "user/mods/order.json";
    protected order: Record<string, number>;
    protected imported: Record<string, IPackageJsonData>;
    protected akiConfig: ICoreConfig;
    protected serverDependencies: Record<string, string>;
    protected skippedMods: string[];
    constructor(logger: ILogger, vfs: VFS, jsonUtil: JsonUtil, modCompilerService: ModCompilerService, bundleLoader: BundleLoader, localisationService: LocalisationService, configServer: ConfigServer, modLoadOrder: ModLoadOrder, modTypeCheck: ModTypeCheck);
    load(container: DependencyContainer): Promise<void>;
    /**
     * Returns a list of mods with preserved load order
     * @returns Array of mod names in load order
     */
    getImportedModsNames(): string[];
    getImportedModDetails(): Record<string, IPackageJsonData>;
    getProfileModsGroupedByModName(profileMods: ModDetails[]): ModDetails[];
    getModPath(mod: string): string;
    protected importModsAsync(): Promise<void>;
    protected sortMods(prev: string, next: string, missingFromOrderJSON: Record<string, boolean>): number;
    /**
     * Check for duplicate mods loaded, show error if any
     * @param modPackageData Dictionary of mod package.json data
     */
    protected checkForDuplicateMods(modPackageData: Record<string, IPackageJsonData>): void;
    /**
     * Check for and return duplicate strings inside an array
     * @param stringArray Array to check for duplicates
     * @returns string array of duplicates, empty if none found
     */
    protected getDuplicates(stringArray: string[]): string[];
    /**
     * Get an array of mods with errors that prevent them from working with SPT
     * @param mods mods to validate
     * @returns Mod names as array
     */
    protected getBrokenMods(mods: string[]): string[];
    /**
     * Get packageJson data for mods
     * @param mods mods to get packageJson for
     * @returns dictionary <modName - package.json>
     */
    protected getModsPackageData(mods: string[]): Record<string, IPackageJsonData>;
    /**
     * Is the passed in mod compatible with the running server version
     * @param mod Mod to check compatibiltiy with AKI
     * @returns True if compatible
     */
    protected isModCombatibleWithAki(mod: IPackageJsonData): boolean;
    /**
     * Execute each mod found in this.imported
     * @param container Dependence container to give to mod when it runs
     * @returns void promise
     */
    protected executeModsAsync(container: DependencyContainer): Promise<void>;
    /**
     * Read loadorder.json (create if doesnt exist) and return sorted list of mods
     * @returns string array of sorted mod names
     */
    sortModsLoadOrder(): string[];
    /**
     * Compile mod and add into class property "imported"
     * @param mod Name of mod to compile/add
     */
    protected addModAsync(mod: string): Promise<void>;
    protected autoInstallDependencies(modPath: string, pkg: IPackageJsonData): void;
    protected areModDependenciesFulfilled(pkg: IPackageJsonData, loadedMods: Record<string, IPackageJsonData>): boolean;
    protected isModCompatible(mod: IPackageJsonData, loadedMods: Record<string, IPackageJsonData>): boolean;
    /**
     * Validate a mod passes a number of checks
     * @param modName name of mod in /mods/ to validate
     * @returns true if valid
     */
    protected validMod(modName: string): boolean;
    getContainer(): DependencyContainer;
}
