import { DependencyContainer } from 'tsyringe';
import { VFS } from "../utils/VFS";
import { InitialModLoader } from "./InitialModLoader";
import { BundleLoader } from "./BundleLoader";
import { HandbookController } from "../controllers/HandbookController";
import { IModLoader } from "../@types/spt/mod/IModLoader";
export declare class DelayedModLoader implements IModLoader {
    private bundleLoader;
    private handbookController;
    private vfs;
    private initialModLoader;
    constructor(bundleLoader: BundleLoader, handbookController: HandbookController, vfs: VFS, initialModLoader: InitialModLoader);
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getImportedModsNames(): string[];
    getModPath(mod: string): string;
    load(container: DependencyContainer): void;
    private executeMods;
    private addBundles;
}
