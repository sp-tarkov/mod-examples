import { DependencyContainer } from "tsyringe";
import { OnLoad } from "../di/OnLoad";
import { ModTypeCheck } from "./ModTypeCheck";
import { PreAkiModLoader } from "./PreAkiModLoader";
export declare class PostDBModLoader implements OnLoad {
    protected preAkiModLoader: PreAkiModLoader;
    protected modTypeCheck: ModTypeCheck;
    constructor(preAkiModLoader: PreAkiModLoader, modTypeCheck: ModTypeCheck);
    onLoad(): Promise<void>;
    getRoute(): string;
    getModPath(mod: string): string;
    protected executeMods(container: DependencyContainer): Promise<void>;
}
