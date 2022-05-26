import { DependencyContainer } from "tsyringe";
import { RouteAction } from "../../../di/Router";
export declare class StaticRouterModService {
    private container;
    constructor(container: DependencyContainer);
    registerStaticRouter(name: string, routes: RouteAction[], topLevelRoute: string): void;
}
