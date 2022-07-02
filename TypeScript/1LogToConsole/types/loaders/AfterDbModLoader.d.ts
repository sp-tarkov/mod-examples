import { DependencyContainer } from "tsyringe";
import { OnLoad } from "../di/OnLoad";
import { InitialModLoader } from "./InitialModLoader";
export declare class AfterDbModLoader implements OnLoad {
    protected initialModLoader: InitialModLoader;
    constructor(initialModLoader: InitialModLoader);
    onLoad(): void;
    getRoute(): string;
    getModPath(mod: string): string;
    protected executeMods(container: DependencyContainer): void;
}
