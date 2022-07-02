import { DependencyContainer } from "./tsyringe";
export interface IAfterDBLoadMod {
    loadAfterDbInit(container: DependencyContainer): void;
}
