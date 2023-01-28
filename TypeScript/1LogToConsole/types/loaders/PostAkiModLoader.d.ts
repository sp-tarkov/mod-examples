import { DependencyContainer } from "tsyringe";
import { HandbookController } from "../controllers/HandbookController";
import { IModLoader } from "../models/spt/mod/IModLoader";
import { VFS } from "../utils/VFS";
import { BundleLoader } from "./BundleLoader";
import { PreAkiModLoader } from "./PreAkiModLoader";
export declare class PostAkiModLoader implements IModLoader {
    protected bundleLoader: BundleLoader;
    protected handbookController: HandbookController;
    protected vfs: VFS;
    protected preAkiModLoader: PreAkiModLoader;
    constructor(bundleLoader: BundleLoader, handbookController: HandbookController, vfs: VFS, preAkiModLoader: PreAkiModLoader);
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getModPath(mod: string): string;
    load(): void;
    protected executeMods(container: DependencyContainer): void;
    protected addBundles(): void;
}
