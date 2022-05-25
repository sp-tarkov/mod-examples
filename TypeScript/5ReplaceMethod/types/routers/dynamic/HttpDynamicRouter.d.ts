import { DynamicRouter, HandledRoute } from "../../di/Router";
import { ImageRouter } from "../ImageRouter";
export declare class HttpDynamicRouter extends DynamicRouter 
{
    private imageRouter;
    constructor(imageRouter: ImageRouter);
    private readonly _routes;
    getHandledRoutes(): HandledRoute[];
    handleDynamic(url: string, info: any, sessionID: string, output: string): any;
}
