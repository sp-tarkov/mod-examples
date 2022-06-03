import { DependencyContainer } from "tsyringe";
export declare class OnLoadModService {
    private container;
    constructor(container: DependencyContainer);
    registerOnLoad(name: string, onLoad: () => void, getRoute: () => string): void;
}
