import { HandbookController } from "../controllers/HandbookController";
import { IModLoader } from "../models/spt/mod/IModLoader";
import { ModCompilerService } from "../services/ModCompilerService";
import { VFS } from "../utils/VFS";
import { BundleLoader } from "./BundleLoader";
import { InitialModLoader } from "./InitialModLoader";
export declare class DelayedModLoader implements IModLoader {
    private bundleLoader;
    private handbookController;
    private vfs;
    private modCompilerService;
    private initialModLoader;
    constructor(bundleLoader: BundleLoader, handbookController: HandbookController, vfs: VFS, modCompilerService: ModCompilerService, initialModLoader: InitialModLoader);
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getImportedModsNames(): string[];
    getModPath(mod: string): string;
    load(): void;
    private executeMods;
    private addBundles;
}
