import { DependencyContainer } from "tsyringe";
export declare class OnUpdateModService {
    private container;
    constructor(container: DependencyContainer);
    registerOnUpdate(name: string, onUpdate: (timeSinceLastRun: number) => boolean, getRoute: () => string): void;
}
