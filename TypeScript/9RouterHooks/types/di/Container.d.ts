import { DependencyContainer } from "tsyringe";
export declare class Container {
    static registerTypes(depContainer: DependencyContainer): void;
    static registerListTypes(depContainer: DependencyContainer): void;
    private static registerUtils;
    private static registerRouters;
    private static registerGenerators;
    private static registerHelpers;
    private static registerLoaders;
    private static registerCallbacks;
    private static registerServices;
    private static registerServers;
    private static registerControllers;
}
