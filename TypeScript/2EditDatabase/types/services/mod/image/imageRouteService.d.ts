export declare class ImageRouteService {
    private routes;
    addRoute(urlKey: string, route: string): void;
    getByKey(urlKey: string): string;
    existsByKey(urlKey: string): boolean;
}
