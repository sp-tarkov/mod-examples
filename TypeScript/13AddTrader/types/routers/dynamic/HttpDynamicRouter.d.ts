import { DynamicRouter } from "../../di/Router";
import { ImageRouter } from "../ImageRouter";
export declare class HttpDynamicRouter extends DynamicRouter {
    private imageRouter;
    constructor(imageRouter: ImageRouter);
}
