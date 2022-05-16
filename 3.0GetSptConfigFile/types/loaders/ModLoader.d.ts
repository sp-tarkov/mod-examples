import { IPackageJsonData } from "../@types/spt/mod/IPackageJsonData";
export declare class ModLoader {
    static basepath: string;
    static imported: {};
    static onLoad: {};
    static load(): void;
    static getBundles(local: any): string;
    static getBundle(key: any, arg1: any): void;
    static importClass(name: string, filepath: string): void;
    static importMods(): void;
    static isModCombatibleWithAki(mod: IPackageJsonData): boolean;
    static executeMods(): void;
    static getModPath(mod: string): string;
    static addMod(mod: string): void;
    static areModDependenciesFulfilled(mod: IPackageJsonData, loadedMods: any): boolean;
    static isModCompatible(mod: any, loadedMods: any): boolean;
    static validMod(mod: any): boolean;
    static getLoadOrderRecursive(mod: any, result: any, visited: any): void;
    static getLoadOrder(mods: any): {};
}
