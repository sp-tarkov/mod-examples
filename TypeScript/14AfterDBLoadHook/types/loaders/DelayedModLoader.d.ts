import { DependencyContainer } from "tsyringe";
import { HandbookController } from "../controllers/HandbookController";
import { IModLoader } from "../models/spt/mod/IModLoader";
import { ModCompilerService } from "../services/ModCompilerService";
import { VFS } from "../utils/VFS";
import { BundleLoader } from "./BundleLoader";
import { InitialModLoader } from "./InitialModLoader";
export declare class DelayedModLoader implements IModLoader {
    protected bundleLoader: BundleLoader;
    protected handbookController: HandbookController;
    protected vfs: VFS;
    protected modCompilerService: ModCompilerService;
    protected initialModLoader: InitialModLoader;
    constructor(bundleLoader: BundleLoader, handbookController: HandbookController, vfs: VFS, modCompilerService: ModCompilerService, initialModLoader: InitialModLoader);
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getModPath(mod: string): string;
    load(): void;
    protected executeMods(container: DependencyContainer): void;
    protected addBundles(): void;
}
