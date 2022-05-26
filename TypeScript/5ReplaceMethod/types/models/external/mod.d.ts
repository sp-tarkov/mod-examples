import { DependencyContainer } from "./tsyringe";
export interface IMod {
    load: (container: DependencyContainer) => void;
    delayedLoad: (container: DependencyContainer) => void;
}
