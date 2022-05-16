import { DependencyContainer } from "tsyringe";
export interface IModLoader {
    load(container: DependencyContainer): void;
    getBundles(local: boolean): string;
    getBundle(key: string, local: boolean): void;
    getImportedModsNames(): string[];
    getModPath(mod: string): string;
}
